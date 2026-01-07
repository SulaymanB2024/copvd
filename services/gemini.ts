import { GoogleGenAI, Type } from "@google/genai";
import { EstimateResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateProjectEstimate(prompt: string): Promise<EstimateResponse> {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Act as a senior software architect. Analyze the following project request and provide a technical estimate: ${prompt}`,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          codename: { type: Type.STRING, description: "A creative project codename" },
          timelineWeeks: { type: Type.STRING, description: "Estimated timeline range in weeks (e.g. '4-6')" },
          summary: { type: Type.STRING, description: "Brief executive summary of the architecture (max 2 sentences)" },
          techStack: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Recommended technology stack"
          },
          features: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Key technical features"
          }
        },
        required: ["codename", "timelineWeeks", "summary", "techStack", "features"]
      },
    },
  });

  const text = response.text;
  if (!text) {
      throw new Error("Failed to generate estimate");
  }
  
  return JSON.parse(text) as EstimateResponse;
}
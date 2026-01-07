import React, { useState } from 'react';
import { SectionId, EstimateResponse } from '../types';
import { generateProjectEstimate } from '../services/gemini';
import { Section } from './ui/Section';
import { Sparkles, Loader2, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AiConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EstimateResponse | null>(null);
  const [error, setError] = useState('');

  const handleConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await generateProjectEstimate(input);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={SectionId.AI_CONSULTANT} className="py-24 relative z-10 overflow-hidden">
      {/* Decorative gradient background for this section */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-brand-900/10 to-slate-950 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <Section>
                <div className="inline-flex items-center gap-2 text-accent-400 font-bold tracking-wider uppercase mb-4">
                    <Sparkles className="w-5 h-5" />
                    AI Architect
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                    Visualize Your Vision Instantly.
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    Not sure where to start? Describe your dream project to our Gemini-powered AI Architect. 
                    It will analyze your requirements and generate a preliminary technical roadmap, estimated timeline, and recommended stack in seconds.
                </p>

                <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
                    <form onSubmit={handleConsultation} className="space-y-4">
                        <label className="block text-sm font-medium text-slate-300">
                            Describe your project idea
                        </label>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="e.g., I want a real-time auction platform for vintage cars with live video streaming and secure payment processing..."
                            className="w-full h-32 bg-slate-950/50 border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none"
                        />
                        <button
                            type="submit"
                            disabled={loading || !input.trim()}
                            className="w-full py-4 bg-gradient-to-r from-brand-600 to-accent-600 text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" /> Analyzing Requirements...
                                </>
                            ) : (
                                <>
                                    Generate Blueprint <Sparkles className="w-4 h-4" />
                                </>
                            )}
                        </button>
                        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                    </form>
                </div>
            </Section>

            {/* Results Display */}
            <Section delay={200} className="lg:mt-12">
                {!result && !loading && (
                    <div className="h-full min-h-[400px] border-2 border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center text-slate-600 p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-slate-900 mb-4 flex items-center justify-center">
                            <Sparkles className="w-8 h-8 opacity-20" />
                        </div>
                        <p>Your AI-generated project blueprint will appear here.</p>
                    </div>
                )}

                {loading && (
                    <div className="h-full min-h-[400px] bg-slate-900/30 rounded-2xl flex flex-col items-center justify-center p-8 border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite]" />
                        <Loader2 className="w-10 h-10 text-brand-500 animate-spin mb-4" />
                        <p className="text-brand-200 font-mono text-sm animate-pulse">Architecting Solution...</p>
                    </div>
                )}

                {result && (
                    <div className="bg-slate-900/80 backdrop-blur-xl border border-brand-500/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.15)]">
                        <div className="bg-white/5 p-6 border-b border-white/5 flex justify-between items-center">
                            <div>
                                <div className="text-xs text-brand-400 font-bold uppercase tracking-widest mb-1">Project Codename</div>
                                <h3 className="text-2xl font-display font-bold text-white">{result.codename}</h3>
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Est. Timeline</div>
                                <div className="text-xl font-mono text-white">{result.timelineWeeks} Weeks</div>
                            </div>
                        </div>
                        
                        <div className="p-6 md:p-8 space-y-8">
                            <div>
                                <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500" /> Executive Summary
                                </h4>
                                <p className="text-slate-400 leading-relaxed text-sm">{result.summary}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Recommended Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {result.techStack.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300 font-mono">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Key Features
                                    </h4>
                                    <ul className="space-y-2">
                                        {result.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm text-slate-400">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                                Book Full Consultation <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}
            </Section>
        </div>
      </div>
    </section>
  );
};

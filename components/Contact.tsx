import React from 'react';
import { SectionId } from '../types';
import { Section } from './ui/Section';
import { ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-32 relative border-t border-line-hair bg-surface-1/30">
      <div className="container-max px-6">
        <Section className="rounded-2xl border border-line-strong bg-obsidian p-8 md:p-16 relative overflow-hidden shadow-2xl">
            
            <div className="max-w-2xl mx-auto text-center">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-txt-primary tracking-tight">
                        Start the conversation.
                    </h2>
                    <p className="text-txt-muted text-lg">
                        Fill out the form below. We'll review your requirements and respond with a preliminary timeline within 24 hours.
                    </p>
                </div>

                <form className="space-y-8 text-left">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="group">
                            <label className="block text-xs font-bold uppercase text-txt-muted tracking-wider mb-3">Name</label>
                            <input type="text" className="w-full bg-surface-1 border border-line-hair rounded-lg py-3 px-4 text-txt-primary focus:border-txt-primary focus:outline-none transition-colors" placeholder="Jane Doe" />
                        </div>
                        <div className="group">
                            <label className="block text-xs font-bold uppercase text-txt-muted tracking-wider mb-3">Email</label>
                            <input type="email" className="w-full bg-surface-1 border border-line-hair rounded-lg py-3 px-4 text-txt-primary focus:border-txt-primary focus:outline-none transition-colors" placeholder="jane@company.com" />
                        </div>
                    </div>

                    <div className="group">
                        <label className="block text-xs font-bold uppercase text-txt-muted tracking-wider mb-3">Project Type</label>
                        <select className="w-full bg-surface-1 border border-line-hair rounded-lg py-3 px-4 text-txt-primary focus:border-txt-primary focus:outline-none transition-colors appearance-none">
                            <option>Marketing Site ($8k+)</option>
                            <option>Web Application ($15k+)</option>
                            <option>Migration / Enterprise</option>
                        </select>
                    </div>

                    <div className="group">
                        <label className="block text-xs font-bold uppercase text-txt-muted tracking-wider mb-3">Vision & Goals</label>
                        <textarea className="w-full bg-surface-1 border border-line-hair rounded-lg py-3 px-4 text-txt-primary focus:border-txt-primary focus:outline-none transition-colors resize-none min-h-[120px]" placeholder="Describe what you are looking to build..." />
                    </div>

                    <div className="pt-4 text-center">
                        <button className="w-full md:w-auto px-10 py-4 bg-txt-primary text-obsidian font-bold rounded-xl hover:bg-white transition-all transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
                            Request Proposal <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </form>
            </div>
        </Section>
      </div>
    </section>
  );
};
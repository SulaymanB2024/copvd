import React from 'react';
import { SectionId } from '../types';
import { PROCESS_STEPS } from '../constants';
import { Section } from './ui/Section';
import { ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id={SectionId.PROCESS} className="py-24 border-t border-line-hair relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface-1 to-transparent opacity-50 pointer-events-none" />
      
      <div className="container-max px-6 relative z-10">
        <Section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-txt-primary mb-6">
                Execution Strategy
            </h2>
            <p className="text-txt-muted max-w-xl text-lg">
                We don't guess. We follow a rigorous 4-phase engineering process to ensure predictable outcomes.
            </p>
        </Section>

        <div className="grid md:grid-cols-2 gap-6">
            {PROCESS_STEPS.map((step, index) => (
                <Section key={index} delay={index * 100}>
                    <div className="group relative p-8 h-full bg-surface-1/50 border border-line-hair rounded-2xl hover:bg-surface-1 hover:border-txt-muted/30 transition-all duration-500 overflow-hidden">
                        
                        {/* Large Watermark */}
                        <div className="absolute -right-4 -top-8 text-[120px] font-display font-bold text-line-hair/50 group-hover:text-line-strong/50 transition-colors select-none leading-none">
                            {step.phase}
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-8 rounded-full border border-line-strong flex items-center justify-center text-xs font-mono text-txt-muted group-hover:bg-txt-primary group-hover:text-obsidian group-hover:border-txt-primary transition-colors">
                                    {index + 1}
                                </div>
                                <div className="h-px flex-grow bg-line-hair group-hover:bg-line-strong transition-colors" />
                                <span className="text-xs font-mono text-txt-secondary uppercase tracking-widest">{step.timeline}</span>
                            </div>

                            <h3 className="text-2xl font-display font-bold text-txt-primary mb-3">{step.title}</h3>
                            <p className="text-txt-muted leading-relaxed mb-8 max-w-sm">{step.description}</p>

                            {/* Deliverables appear on hover/interaction */}
                            <div className="space-y-3 pt-6 border-t border-line-hair/50">
                                <p className="text-[10px] uppercase tracking-widest text-txt-disabled font-bold mb-2">Deliverables</p>
                                <div className="flex flex-wrap gap-2">
                                    {step.deliverables.map(d => (
                                        <span key={d} className="text-xs px-2 py-1 rounded bg-obsidian border border-line-hair text-txt-secondary group-hover:border-txt-muted/50 transition-colors">
                                            {d}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            ))}
        </div>
      </div>
    </section>
  );
};
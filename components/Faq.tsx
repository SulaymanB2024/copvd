import React, { useState } from 'react';
import { SectionId } from '../types';
import { FAQS } from '../constants';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={SectionId.FAQ} className="py-24 border-t border-line-hair">
      <div className="container-max px-6">
        <div className="grid lg:grid-cols-2 gap-16">
            <Section>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-txt-primary mb-6">
                    FAQ
                </h2>
                <p className="text-txt-muted max-w-sm">
                    Common questions about our process and technical standards.
                </p>
            </Section>

            <div className="space-y-px bg-line-hair border border-line-hair">
                {FAQS.map((faq, index) => (
                    <Section key={index} delay={index * 50}>
                        <div 
                            className="p-6 bg-obsidian cursor-pointer hover:bg-surface-1 transition-colors group"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className={`font-medium pr-8 transition-colors ${openIndex === index ? 'text-txt-primary' : 'text-txt-secondary group-hover:text-txt-primary'}`}>
                                    {faq.question}
                                </h3>
                                {openIndex === index ? <Minus className="w-4 h-4 text-txt-primary" /> : <Plus className="w-4 h-4 text-txt-muted" />}
                            </div>
                            <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <p className="text-txt-muted text-sm leading-relaxed max-w-md">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    </Section>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
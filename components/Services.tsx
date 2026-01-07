import React from 'react';
import { SectionId } from '../types';
import { SERVICES } from '../constants';
import { Section } from './ui/Section';

export const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-32 border-t border-line-hair bg-surface-1/10">
      <div className="container-max px-6">
        <Section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-txt-primary mb-6">
                Capabilities
            </h2>
        </Section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                    <Section key={service.id} delay={index * 50}>
                        <div className="relative h-full bg-surface-1/50 border border-line-hair p-8 rounded-2xl hover:bg-surface-2 transition-colors duration-500 group overflow-hidden">
                            {/* Subtle Radial Gradient on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="mb-8 w-12 h-12 flex items-center justify-center rounded-xl bg-obsidian border border-line-hair text-txt-secondary group-hover:text-txt-primary group-hover:border-txt-muted transition-colors duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-txt-primary mb-4">
                                    {service.title}
                                </h3>
                                
                                <p className="text-sm text-txt-muted leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </Section>
                );
            })}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { SectionId } from '../types';
import { PRICING_TIERS } from '../constants';
import { Section } from './ui/Section';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id={SectionId.PRICING} className="py-24 border-t border-line-hair bg-surface-1/20 relative">
      <div className="container-max px-6 relative z-10">
        <Section className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-txt-primary mb-6">
                Investment
            </h2>
            <p className="text-txt-muted text-lg">
                Transparent starting ranges. We deliver fixed scopes with guaranteed timelines, not open-ended hourly billing.
            </p>
        </Section>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {PRICING_TIERS.map((tier, index) => (
                <Section key={index} delay={index * 100} className="flex h-full">
                    <div className={`flex flex-col w-full p-8 rounded-2xl border transition-all duration-500 group relative ${
                        tier.isPremium 
                        ? 'bg-surface-1 border-line-strong hover:border-txt-muted/50' 
                        : 'bg-transparent border-line-strong hover:bg-surface-1 hover:border-line-strong'
                    }`}>
                        {tier.isPremium && (
                            <>
                                <div className="absolute -inset-px bg-gradient-to-b from-txt-primary/20 to-transparent rounded-2xl opacity-50 pointer-events-none" />
                                <div className="absolute top-4 right-4 bg-txt-primary text-obsidian text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                                    Popular
                                </div>
                            </>
                        )}
                        
                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-xl font-bold text-txt-primary mb-2">{tier.name}</h3>
                            <p className="text-sm text-txt-muted mb-8 h-10 line-clamp-2">{tier.description}</p>
                            
                            <div className="mb-8 pb-8 border-b border-line-hair">
                                <span className="text-xs text-txt-disabled uppercase tracking-wide">Starting at</span>
                                <div className="text-4xl font-display font-bold text-txt-primary mt-1">{tier.price}</div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map(feature => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-txt-secondary group-hover:text-txt-primary transition-colors">
                                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.isPremium ? 'text-txt-primary' : 'text-txt-muted group-hover:text-txt-primary'}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a 
                                href={`#${SectionId.CONTACT}`}
                                className={`w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center transition-all duration-300 ${
                                    tier.isPremium 
                                    ? 'bg-txt-primary text-obsidian hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                                    : 'bg-transparent text-txt-primary border border-line-strong hover:bg-surface-2 hover:border-txt-muted'
                                }`}
                            >
                                Start Inquiry
                            </a>
                        </div>
                    </div>
                </Section>
            ))}
        </div>
      </div>
    </section>
  );
};
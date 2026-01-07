import React from 'react';
import { SectionId } from '../types';
import { PORTFOLIO } from '../constants';
import { Section } from './ui/Section';
import { ArrowUpRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <section id={SectionId.WORK} className="py-32 bg-slate-900/20 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <Section>
                <span className="text-brand-400 font-bold tracking-widest text-sm uppercase mb-4 block">Selected Works</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
                    Digital <span className="text-slate-500">Landmarks.</span>
                </h2>
            </Section>
            <Section delay={100} className="hidden md:block">
                <p className="text-slate-400 max-w-sm text-right">
                    We partner with visionaries to build products that define categories.
                </p>
            </Section>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO.map((item, index) => (
                <Section key={item.id} delay={index * 150} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 border border-white/5">
                        <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Overlay Button */}
                        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <div className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="pl-2 border-l-2 border-transparent group-hover:border-brand-500 transition-colors duration-300">
                        <div className="text-brand-400 text-xs font-bold uppercase tracking-widest mb-2">
                            {item.category}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-100 transition-colors">{item.title}</h3>
                        <p className="text-slate-500 text-sm">{item.description}</p>
                    </div>
                </Section>
            ))}
        </div>
      </div>
    </section>
  );
};

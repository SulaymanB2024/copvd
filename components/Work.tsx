import React from 'react';
import { SectionId } from '../types';
import { WORK_ITEMS } from '../constants';
import { Section } from './ui/Section';
import { ArrowUpRight } from 'lucide-react';

// --- VISUAL DEMOS ---

const FintechDemo = () => (
    <div className="absolute inset-0 bg-surface-1 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        {/* Chart Container */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 px-4 pb-4 flex items-end gap-1">
            {/* Simulated Candle Sticks */}
            {[40, 60, 45, 70, 65, 85, 80, 95, 75, 60, 80, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-surface-3 rounded-sm relative group hover:bg-surface-2 transition-colors" style={{ height: `${h}%` }}>
                     <div className="absolute top-0 left-0 right-0 h-[1px] bg-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                </div>
            ))}
        </div>
        
        {/* Live Ticker */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center border-b border-line-hair pb-2">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-mono text-xs text-green-400">BTC/USD</span>
            </div>
            <span className="font-mono text-sm text-txt-primary font-bold">98,420.50</span>
        </div>
    </div>
);

const RetailDemo = () => (
    <div className="absolute inset-0 bg-surface-1 group-hover:bg-black transition-colors duration-500 flex items-center justify-center overflow-hidden">
        {/* Abstract "Code" Layer (Back) */}
        <div className="absolute inset-0 p-6 font-mono text-[8px] text-txt-disabled opacity-100 group-hover:opacity-20 transition-opacity duration-500">
            {`{
  "id": "prod_821",
  "name": "Nike Air",
  "price": 12900,
  "stock": "IN_STOCK",
  "variants": [
    "size_10",
    "size_11"
  ]
}`}
        </div>
        
        {/* Visual Product Card (Front) */}
        <div className="relative z-10 w-32 h-40 bg-surface-2 border border-line-hair rounded-lg transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-2xl flex flex-col p-2">
            <div className="flex-1 bg-surface-3 rounded mb-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-surface-3 to-line-strong"></div>
            </div>
            <div className="h-2 w-2/3 bg-txt-primary rounded-full mb-1"></div>
            <div className="h-2 w-1/3 bg-txt-muted rounded-full"></div>
        </div>
    </div>
);

const SaasDemo = () => (
    <div className="absolute inset-0 bg-surface-1 flex items-center justify-center">
        {/* Radar Scanner */}
        <div className="relative w-48 h-48 rounded-full border border-line-hair flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-line-hair scale-75 opacity-50"></div>
            <div className="absolute inset-0 rounded-full border border-line-hair scale-50 opacity-30"></div>
            
            {/* Scan Line */}
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.1)_360deg)] animate-[radar_2s_linear_infinite]"></div>
            
            {/* Score */}
            <div className="relative z-10 flex flex-col items-center">
                <span className="text-4xl font-display font-bold text-txt-primary">100</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-green-400 bg-green-500/10 px-2 py-0.5 rounded mt-1">Perf</span>
            </div>
        </div>
    </div>
);

export const Work: React.FC = () => {
  const getDemo = (id: string) => {
    switch(id) {
        case 'w1': return <FintechDemo />;
        case 'w2': return <RetailDemo />;
        case 'w3': return <SaasDemo />;
        default: return null;
    }
  };

  return (
    <section id={SectionId.WORK} className="py-32 border-t border-line-hair bg-obsidian">
      <div className="container-max px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <Section>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-txt-primary mb-6">
                    Proof of Craft
                </h2>
                <p className="text-txt-muted max-w-lg text-lg">
                    Real results from our lab. High-performance architecture in action.
                </p>
            </Section>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {WORK_ITEMS.map((item, index) => (
                <Section key={item.id} delay={index * 150}>
                    <div className="group cursor-pointer block h-full">
                        {/* Demo Container */}
                        <div className="relative aspect-[4/3] bg-surface-1 rounded-2xl mb-6 overflow-hidden border border-line-hair group-hover:border-txt-muted transition-colors duration-500 shadow-lg">
                            {getDemo(item.id)}
                            
                            {/* Hover Action */}
                            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <div className="w-8 h-8 rounded-full bg-txt-primary text-obsidian flex items-center justify-center">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-xl font-bold text-txt-primary">{item.title}</h3>
                                <span className="text-[10px] font-mono text-txt-secondary uppercase border border-line-hair px-2 py-1 rounded bg-surface-1">{item.category}</span>
                            </div>
                            <p className="text-sm font-mono text-green-400 mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                {item.metric}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs text-txt-disabled hover:text-txt-secondary transition-colors">
                                        #{tag}
                                    </span>
                                ))}
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
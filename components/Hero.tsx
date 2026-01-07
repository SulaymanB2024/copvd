import React from 'react';
import { SectionId } from '../types';
import { ArrowRight, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id={SectionId.HOME} className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-obsidian">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>

        <div className="container-max px-6 grid lg:grid-cols-2 gap-20 items-center relative z-20">
            
            {/* Left Content */}
            <div className="space-y-10">
                <div className="space-y-6 animate-fade-in-up">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-line-hair rounded-full bg-surface-1/50 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-mono text-txt-secondary tracking-widest uppercase">System Operational</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight text-txt-primary">
                        Architecture <br/>
                        <span className="text-txt-disabled">Not Decoration.</span>
                    </h1>

                    <p className="text-lg text-txt-secondary max-w-md leading-relaxed">
                        We build bespoke digital products. High-performance engineering for brands that refuse to compromise.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <a 
                        href={`#${SectionId.CONTACT}`}
                        className="group inline-flex items-center justify-center px-8 py-4 bg-txt-primary text-obsidian font-bold rounded-xl transition-all hover:bg-white hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        Initiate Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <a 
                        href={`#${SectionId.WORK}`}
                        className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-line-hair text-txt-primary font-medium rounded-xl hover:bg-surface-1 hover:border-line-strong transition-colors"
                    >
                        View Architecture
                    </a>
                </div>

                {/* Technical Stats */}
                <div className="pt-8 border-t border-line-hair flex gap-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <div>
                        <div className="text-3xl font-display font-bold text-txt-primary">99.9%</div>
                        <div className="text-xs font-mono text-txt-disabled uppercase mt-1">Uptime SLA</div>
                    </div>
                    <div>
                        <div className="text-3xl font-display font-bold text-txt-primary">&lt;100ms</div>
                        <div className="text-xs font-mono text-txt-disabled uppercase mt-1">Global Latency</div>
                    </div>
                </div>
            </div>

            {/* Right: Technical Diagram Animation */}
            <div className="relative hidden lg:block h-[600px] w-full animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="absolute inset-0 border border-line-hair bg-surface-1/30 rounded-2xl backdrop-blur-sm overflow-hidden flex items-center justify-center">
                    
                    {/* Abstract Nodes */}
                    <div className="relative w-full h-full">
                        {/* Center Node */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-surface-2 border border-line-strong rounded-2xl flex items-center justify-center z-10 shadow-2xl">
                            <Terminal className="w-8 h-8 text-txt-primary" />
                        </div>

                        {/* Orbiting Nodes */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-line-hair rounded-full animate-radar opacity-20"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-line-hair rounded-full opacity-30"></div>

                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="white" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
                            <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="white" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" style={{ animationDelay: '1s' }} />
                            <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="white" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" style={{ animationDelay: '2s' }} />
                        </svg>

                        {/* Floating Cards */}
                        <div className="absolute top-[20%] left-[15%] p-4 bg-obsidian border border-line-hair rounded-lg shadow-xl animate-float">
                            <div className="w-20 h-2 bg-line-strong rounded mb-2"></div>
                            <div className="w-12 h-2 bg-line-hair rounded"></div>
                        </div>

                         <div className="absolute bottom-[25%] right-[20%] p-4 bg-obsidian border border-line-hair rounded-lg shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                            <div className="flex gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                            </div>
                            <div className="w-24 h-16 bg-surface-1 rounded"></div>
                        </div>

                    </div>
                    
                    {/* Code Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent z-20"></div>
                    <div className="absolute bottom-6 left-6 font-mono text-[10px] text-txt-disabled">
                        <span className="text-green-500">➜</span> initializing core modules...<br/>
                        <span className="text-green-500">➜</span> loading assets [12ms]<br/>
                        <span className="text-green-500">➜</span> hydration complete<br/>
                        <span className="animate-blink">_</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
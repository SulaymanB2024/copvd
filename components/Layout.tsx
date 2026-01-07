import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { SectionId } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 300)) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative font-sans text-txt-primary">
      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-noise opacity-50"></div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-obsidian/80 backdrop-blur-md border-line-hair py-3' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container-max px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group z-50">
            <div className="w-8 h-8 bg-surface-1 border border-line-hair flex items-center justify-center rounded-lg group-hover:border-txt-primary transition-colors">
                <span className="font-display font-bold text-lg text-txt-primary">L</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-txt-primary">Lumina</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {NAV_ITEMS.map((item) => {
               const isActive = activeSection === item.href.substring(1);
               return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive ? 'text-txt-primary' : 'text-txt-muted hover:text-txt-primary'
                  }`}
                >
                  {item.label}
                  {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-white animate-fade-in" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a 
                href={`#${SectionId.CONTACT}`}
                className="group flex items-center gap-2 text-sm font-medium px-5 py-2.5 bg-txt-primary text-obsidian rounded-lg hover:bg-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
                Start Project <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-txt-primary z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`fixed inset-0 bg-obsidian z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
             {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-display font-semibold text-txt-secondary hover:text-txt-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
        </div>
      </nav>

      <main className="flex-grow z-10">
        {children}
      </main>

      <footer className="relative z-10 border-t border-line-hair py-16 bg-obsidian">
        <div className="container-max px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                    <span className="font-display font-bold text-2xl tracking-tight block mb-4">Lumina</span>
                    <p className="text-txt-muted text-sm max-w-xs">
                        Bespoke digital architecture by the UT Team. <br/>
                        Built for conversion, engineered for speed.
                    </p>
                </div>
                <div className="flex gap-8 text-sm text-txt-muted">
                    <a href="#" className="hover:text-txt-primary transition-colors">Twitter</a>
                    <a href="#" className="hover:text-txt-primary transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-txt-primary transition-colors">GitHub</a>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-line-hair text-xs text-txt-disabled flex justify-between">
                <span>© {new Date().getFullYear()} Lumina Digital.</span>
                <span>All Systems Operational</span>
            </div>
        </div>
      </footer>
    </div>
  );
};
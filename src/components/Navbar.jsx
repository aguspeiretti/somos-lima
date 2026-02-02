
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants.js';

const Navbar = ({ currentView, onViewChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || currentView !== 'home' ? 'bg-pearl/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => onViewChange('home')} className="flex flex-col items-start group">
          <span className="text-4xl font-serif font-bold tracking-tighter leading-none group-hover:text-lima transition-colors text-charcoal">
            LIMA
          </span>
          <span className="text-[10px] tracking-[0.3em] font-sans font-medium uppercase text-charcoal/60 mt-1">
            ARQ. INTERIOR
          </span>
        </button>

        <div className="hidden md:flex items-center space-x-12">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.href} 
              onClick={() => onViewChange(item.href)}
              className={`text-xs uppercase tracking-widest font-sans font-semibold transition-colors ${currentView === item.href ? 'text-lima' : 'text-charcoal hover:text-lima'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button 
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-charcoal transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-charcoal transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-charcoal transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-pearl z-40 md:hidden flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in duration-300">
          {NAV_ITEMS.map((item) => (
            <button 
              key={item.href} 
              onClick={() => {
                onViewChange(item.href);
                setIsMobileMenuOpen(false);
              }}
              className={`text-2xl font-serif font-medium transition-colors ${currentView === item.href ? 'text-lima' : 'text-charcoal hover:text-lima'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            className="absolute top-8 right-6 text-charcoal text-xs uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cerrar
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

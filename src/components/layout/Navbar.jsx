import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '../../data/navigationData';

export const Navbar = ({ isScrolled, scrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    scrollTo(id);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'top-2 md:top-3' : 'top-4 md:top-6'}`}>
      <div className="container mx-auto px-4 md:px-10">
        {/* Header principal estilizado y más fino con centrado absoluto de enlaces */}
        <div className="relative flex justify-between items-center transition-all duration-300 bg-[#121212]/85 backdrop-blur-xl shadow-2xl px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full border border-white/10">
          
          {/* Logo Oficial n² en formato .svg */}
          <div 
            className="flex items-center gap-2 sm:gap-3 z-10 cursor-pointer group"
            onClick={() => handleNavClick('inicio')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('inicio')}
            aria-label="Ir al inicio de n²"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-[#CDFC8A] p-1 flex items-center justify-center shadow-[0_0_15px_rgba(205,252,138,0.25)] transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/logo1.svg" 
                alt="Logo n²" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-display text-white flex items-end tracking-tighter">
              n<span className="text-[#CDFC8A] mb-1 sm:mb-1.5 ml-0.5 text-base sm:text-lg md:text-xl">2</span>
            </div>
          </div>
          
          {/* Desktop Menu - Enlaces perfectamente centrados en su totalidad */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            {navLinks.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)} 
                className="relative group px-1 py-1 text-xs lg:text-sm font-bold text-gray-300 uppercase tracking-widest transition-colors duration-300 hover:text-white"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#CDFC8A] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA Button más fino y estilizado con Dark Purple y Soft Lavender */}
          <div className="hidden md:block z-10">
            <button 
              onClick={() => handleNavClick('contacto')} 
              className="bg-[#3C183C] text-[#D2CBFE] hover:text-white px-6 py-2.5 md:py-3 rounded-full hover:bg-[#522252] border border-[#D2CBFE]/30 hover:border-[#D2CBFE]/60 transition-all text-xs md:text-sm font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(60,24,60,0.6)] hover:shadow-[0_0_25px_rgba(210,203,254,0.35)]"
            >
              Empezar Proyecto <ArrowRight size={14} className="-rotate-45" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden text-white p-1.5 focus:outline-none z-10" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Sólido y de Alta Legibilidad */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-[#121212]/95 backdrop-blur-2xl rounded-3xl p-4 sm:p-5 flex flex-col space-y-1.5 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative z-50 animate-fade-in">
            {navLinks.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)} 
                className="text-left px-4 py-3 rounded-2xl hover:bg-white/10 text-gray-200 hover:text-white font-bold text-sm uppercase tracking-widest transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="h-[1px] w-full bg-white/10 my-2"></div>
            <button 
              onClick={() => handleNavClick('contacto')} 
              className="w-full text-center px-4 py-3.5 rounded-2xl bg-[#CDFC8A] text-[#022E21] font-bold text-sm uppercase tracking-widest shadow-lg flex items-center justify-center gap-2"
            >
              Empezar Proyecto <ArrowRight size={16} className="-rotate-45" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

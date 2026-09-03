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
        <div className="relative flex justify-between items-center transition-all duration-300 bg-[#121212]/85 backdrop-blur-xl shadow-2xl px-6 md:px-8 py-3 md:py-3.5 rounded-full border border-white/10">
          
          {/* Logo y Elemento Gráfico Neo-brutalista */}
          <div className="flex items-center gap-2.5 z-10">
            <div 
              className="text-2xl md:text-3xl font-display text-white cursor-pointer flex items-end tracking-tighter" 
              onClick={() => handleNavClick('inicio')}
            >
              n<span className="text-[#CDFC8A] mb-2 ml-0.5 text-lg md:text-xl">2</span>
            </div>
            <svg className="hidden md:block w-6 h-6 animate-spin-slow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0L57 35L93 15L65 43L100 50L65 57L93 85L57 65L50 100L43 65L7 85L35 57L0 50L35 43L7 15L43 35L50 0Z" fill="#CDFC8A"/>
            </svg>
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
            className="md:hidden text-white p-1.5 focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 glass-panel rounded-2xl p-4 flex flex-col space-y-2 border border-white/10 relative z-50">
            {navLinks.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)} 
                className="text-left px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 font-bold uppercase tracking-widest"
              >
                {item.label}
              </button>
            ))}
            <div className="h-[1px] w-full bg-white/10 my-2"></div>
            <button 
              onClick={() => handleNavClick('contacto')} 
              className="text-left px-4 py-3 text-[#CDFC8A] font-bold uppercase tracking-widest"
            >
              Empezar Proyecto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

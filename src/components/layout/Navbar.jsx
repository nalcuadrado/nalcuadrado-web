import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '../../data/navigationData';

export const Navbar = ({ isScrolled, scrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      scrollTo(id);
    }
  };

  const handleServicesClick = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/servicios') {
      navigate('/servicios');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'top-2 md:top-3' : 'top-4 md:top-6'}`}>
      <div className="container mx-auto px-4 md:px-10">
        {/* Header principal con 3 secciones simétricas (Izquierda, Centro perfectamente medido, Derecha) */}
        <div className="relative flex justify-between items-center transition-all duration-300 bg-[#121212]/85 backdrop-blur-xl shadow-2xl px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full border border-white/10">
          
          {/* 1. Logo (Extremo Izquierdo) */}
          <div className="flex items-center justify-start flex-1 z-10 pointer-events-auto">
            <div 
              className="flex items-center cursor-pointer group shrink-0"
              onClick={() => handleNavClick('inicio')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNavClick('inicio')}
              aria-label="Ir al inicio de N²"
            >
              <img 
                src="/IMAGOTIPO.png" 
                alt="Logo N²" 
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* 2. Desktop Menu - Absolutamente Centrado en el Medio del Navbar con prioridad de clic (z-20) */}
          <div className="hidden xl:flex items-center justify-center gap-3 2xl:gap-8 absolute inset-x-0 mx-auto w-fit z-20 pointer-events-auto">
            {navLinks.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)} 
                className="relative group px-1 py-1 text-xs 2xl:text-sm font-bold text-gray-300 uppercase tracking-wider 2xl:tracking-widest transition-colors duration-300 hover:text-white cursor-pointer whitespace-nowrap"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#CDFC8A] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* 3. Botón / Menú Hamburguesa (Extremo Derecho) */}
          <div className="flex items-center justify-end flex-1 z-10 pointer-events-auto">
            {/* Desktop CTA Button */}
            <div className="hidden xl:block shrink-0">
              <button 
                onClick={handleServicesClick} 
                className="bg-[#3C183C] text-[#D2CBFE] hover:text-white px-3.5 2xl:px-6 py-2 2xl:py-3 rounded-full hover:bg-[#522252] border border-[#D2CBFE]/30 hover:border-[#D2CBFE]/60 transition-all text-[11px] 2xl:text-sm font-bold uppercase tracking-wider 2xl:tracking-widest flex items-center gap-1.5 2xl:gap-2 shadow-[0_0_20px_rgba(60,24,60,0.6)] hover:shadow-[0_0_25px_rgba(210,203,254,0.35)] cursor-pointer whitespace-nowrap"
              >
                Nuestros Servicios <ArrowRight size={14} className="-rotate-45" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="xl:hidden text-white p-1.5 focus:outline-none shrink-0" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Sólido y de Alta Legibilidad */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 bg-[#121212]/95 backdrop-blur-2xl rounded-3xl p-4 sm:p-5 flex flex-col space-y-1.5 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative z-50 animate-fade-in">
            {navLinks.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavClick(item.id)} 
                className="text-left px-4 py-3 rounded-2xl hover:bg-white/10 text-gray-200 hover:text-white font-bold text-sm uppercase tracking-widest transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <div className="h-[1px] w-full bg-white/10 my-2"></div>
            <button 
              onClick={handleServicesClick} 
              className="w-full text-center px-4 py-3.5 rounded-2xl bg-[#CDFC8A] text-[#022E21] font-bold text-sm uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              Nuestros Servicios <ArrowRight size={16} className="-rotate-45" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { MousePointer2 } from 'lucide-react';

export const HeroDecorations = () => {
  return (
    <>
      {/* Fondo Degradado Estilo Aurora Vibrante */}
      <div className="hero-aurora"></div>

      {/* Estrella de múltiples puntas (Fresh Lime #CDFC8A) */}
      <svg 
        className="absolute top-[18%] left-[4%] sm:left-[8%] md:left-[12%] animate-spin-slow opacity-90 w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 pointer-events-none z-10" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 0L57 35L93 15L65 43L100 50L65 57L93 85L57 65L50 100L43 65L7 85L35 57L0 50L35 43L7 15L43 35L50 0Z" fill="#CDFC8A"/>
      </svg>

      {/* Destello 4 puntas (Soft Lavender #D2CBFE) */}
      <svg 
        className="absolute top-[62%] right-[4%] sm:right-[8%] md:right-[15%] animate-float-2 opacity-80 w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 pointer-events-none z-10" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 5L55 45L95 50L55 55L50 95L45 55L5 50L45 45Z" fill="#D2CBFE"/>
      </svg>

      {/* Flor/Cruz abstracta (Fresh Lime #CDFC8A) */}
      <svg 
        className="absolute top-[12%] right-[8%] sm:right-[15%] md:right-[30%] animate-spin-slow opacity-80 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none z-10" 
        style={{ animationDirection: 'reverse' }} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 10 C 50 30, 70 50, 90 50 C 70 50, 50 70, 50 90 C 50 70, 30 50, 10 50 C 30 50, 50 30, 50 10 Z" fill="#CDFC8A"/>
      </svg>

      {/* Cursors Colaborativos Animados exclusivos para Desktop para evitar desbordamientos móviles */}
      <div className="absolute top-[40%] left-[3%] md:left-[8%] z-30 animate-cursor-1 pointer-events-none hidden lg:block">
        <MousePointer2 size={32} className="text-[#CDFC8A] fill-[#CDFC8A] -rotate-12 drop-shadow-[0_5px_15px_rgba(205,252,138,0.6)]" />
        <div className="bg-[#CDFC8A] text-[#022E21] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest absolute top-8 left-8 shadow-xl whitespace-nowrap">
          alicia
        </div>
      </div>
      
      <div className="absolute top-[40%] right-[3%] md:right-[8%] z-30 animate-cursor-2 pointer-events-none hidden lg:block">
        <MousePointer2 size={32} className="text-[#D2CBFE] fill-[#D2CBFE] -rotate-12 drop-shadow-[0_5px_15px_rgba(210,203,254,0.6)]" />
        <div className="bg-[#3C183C] text-[#D2CBFE] border border-[#D2CBFE]/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest absolute top-8 left-8 shadow-xl whitespace-nowrap">
          lily
        </div>
      </div>
    </>
  );
};

export default HeroDecorations;

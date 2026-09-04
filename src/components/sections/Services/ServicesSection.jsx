import React, { useState } from 'react';
import { Code, Megaphone } from 'lucide-react';
import AnimatedSection from '../../common/AnimatedSection';
import ServiceCard from './ServiceCard';
import { servicesData } from '../../../data/servicesData';

export const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('dev');

  return (
    <section id="servicios" className="pt-28 md:pt-44 pb-20 md:pb-36 bg-transparent relative z-10 scroll-mt-20 md:scroll-mt-28 overflow-hidden">
      {/* Elementos gráficos decorativos estilo Neo-brutalista */}
      <svg 
        className="absolute top-12 right-4 sm:right-6 md:right-16 animate-spin-slow opacity-60 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none z-0" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 0L57 35L93 15L65 43L100 50L65 57L93 85L57 65L50 100L43 65L7 85L35 57L0 50L35 43L7 15L43 35L50 0Z" fill="#CDFC8A"/>
      </svg>

      <svg 
        className="absolute top-44 left-3 sm:left-4 md:left-12 animate-float-1 opacity-50 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 pointer-events-none z-0" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 5L55 45L95 50L55 55L50 95L45 55L5 50L45 45Z" fill="#D2CBFE"/>
      </svg>

      {/* Contenedor con exactamente el mismo ancho lateral del Navbar */}
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        
        {/* Cabecera y Selector de Pestañas con espaciado balanceado y adaptable */}
        <AnimatedSection className="flex flex-col items-center mb-12 sm:mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display tracking-tight text-white mb-6 sm:mb-10 leading-tight">
            elige tu <span className="text-[#CDFC8A]">solución</span>
          </h2>
          
          <div className="flex bg-[#121212]/90 backdrop-blur-xl p-1.5 sm:p-2 rounded-full border border-white/10 w-full max-w-xs sm:max-w-md mx-auto shadow-2xl justify-center">
            <button 
              onClick={() => setActiveTab('dev')}
              className={`flex-1 justify-center px-4 sm:px-8 md:px-10 py-2.5 sm:py-3.5 md:py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 flex items-center gap-2 sm:gap-3 cursor-pointer ${
                activeTab === 'dev' 
                  ? 'bg-[#3C183C] text-white border border-[#CDFC8A]/30 shadow-lg scale-105 font-bold' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Code size={16} className="sm:w-[18px] sm:h-[18px]" /> Desarrollo
            </button>
            <button 
              onClick={() => setActiveTab('mkt')}
              className={`flex-1 justify-center px-4 sm:px-8 md:px-10 py-2.5 sm:py-3.5 md:py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 flex items-center gap-2 sm:gap-3 cursor-pointer ${
                activeTab === 'mkt' 
                  ? 'bg-[#CDFC8A] text-[#022E21] shadow-lg scale-105 font-bold' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Megaphone size={16} className="sm:w-[18px] sm:h-[18px]" /> Marketing
            </button>
          </div>
        </AnimatedSection>

        {/* Contenido de la Pestaña Activa alineado al ancho total */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData[activeTab].map((item, index) => (
            <AnimatedSection key={`${activeTab}-${index}`} delay={index * 0.12} className="h-full">
              <ServiceCard item={item} theme={activeTab} />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

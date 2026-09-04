import React from 'react';
import { Target, Compass } from 'lucide-react';
import AnimatedSection from '../../common/AnimatedSection';
import FeatureCard from './FeatureCard';
import { featuresData } from '../../../data/featuresData';

export const VisionSection = () => {
  return (
    <section id="vision" className="pt-28 md:pt-44 pb-20 md:pb-36 bg-transparent relative z-10 scroll-mt-20 md:scroll-mt-28 overflow-hidden">
      {/* Elementos gráficos decorativos estilo Neo-brutalista */}
      <svg 
        className="absolute top-12 right-4 sm:right-6 md:right-16 animate-spin-slow opacity-50 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 pointer-events-none z-0" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 0L57 35L93 15L65 43L100 50L65 57L93 85L57 65L50 100L43 65L7 85L35 57L0 50L35 43L7 15L43 35L50 0Z" fill="#CDFC8A"/>
      </svg>

      <svg 
        className="absolute bottom-16 left-4 sm:left-6 md:left-12 animate-float-1 opacity-50 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 pointer-events-none z-0" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 5L55 45L95 50L55 55L50 95L45 55L5 50L45 45Z" fill="#D2CBFE"/>
      </svg>

      {/* Contenedor exactamente alineado con el ancho del Navbar */}
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        
        {/* Cabecera de Sección elegante y consistente */}
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-4 sm:gap-6 border-b border-white/10 pb-4 sm:pb-6">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-white tracking-tight leading-none">
              visión & <br/><span className="text-[#CDFC8A]">propósito</span>
            </h2>
          </div>
          <p className="text-gray-300 max-w-sm text-sm md:text-base leading-relaxed font-normal">
            La filosofía y el motor estratégico que guían cada línea de código, cada diseño y cada objetivo alcanzado.
          </p>
        </AnimatedSection>

        {/* Bloque Misión & Visión (Dos columnas oscuras, nítidas y equilibradas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Tarjeta Misión */}
          <AnimatedSection 
            delay="0.1s" 
            className="bg-[#121212]/95 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-14 border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:border-[#CDFC8A]/50 transition-all duration-500 shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#022E21]/30 rounded-full filter blur-[90px] group-hover:bg-[#022E21]/50 transition-all duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#022E21]/80 border border-white/10 flex items-center justify-center text-[#CDFC8A] shadow-md">
                  <Target size={24} className="sm:w-7 sm:h-7" />
                </div>
                <span className="text-xs uppercase tracking-widest px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-bold">
                  Propósito Tangible
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display text-white mb-4 sm:mb-6 font-bold tracking-tight">
                nuestra <span className="text-[#CDFC8A]">misión</span>
              </h3>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed">
                Construir y escalar herramientas digitales que resuelvan problemas reales y <strong className="text-white font-bold">generen rentabilidad medible</strong>. Combinamos ingeniería de software de élite con diseño intuitivo para que cada desarrollo convierta usuarios y acelere modelos de negocio.
              </p>
            </div>

            <div className="relative z-10 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 flex items-center gap-3 text-xs uppercase tracking-widest text-[#CDFC8A] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#CDFC8A] shadow-[0_0_8px_#CDFC8A]"></span>
              Enfoque en ejecución y escalabilidad
            </div>
          </AnimatedSection>

          {/* Tarjeta Visión */}
          <AnimatedSection 
            delay="0.2s" 
            className="bg-[#121212]/95 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-14 border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:border-[#CDFC8A]/50 transition-all duration-500 shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#3C183C]/35 rounded-full filter blur-[90px] group-hover:bg-[#3C183C]/60 transition-all duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#3C183C]/80 border border-white/10 flex items-center justify-center text-[#CDFC8A] shadow-md">
                  <Compass size={24} className="sm:w-7 sm:h-7" />
                </div>
                <span className="text-xs uppercase tracking-widest px-3 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-bold">
                  Hacia el Futuro
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display text-white mb-4 sm:mb-6 font-bold tracking-tight">
                nuestra <span className="text-[#CDFC8A]">visión</span>
              </h3>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed">
                Ser la agencia boutique imprescindible para marcas que buscan <strong className="text-white font-bold">liderar su categoría en la era digital</strong>. Demostrar que la unión entre código limpio, vanguardia estética y datos multiplica exponencialmente el valor: al cuadrado.
              </p>
            </div>

            <div className="relative z-10 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 flex items-center gap-3 text-xs uppercase tracking-widest text-[#CDFC8A] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#CDFC8A] shadow-[0_0_8px_#CDFC8A]"></span>
              Innovación continua y liderazgo
            </div>
          </AnimatedSection>

        </div>

        {/* Sección: El Diferenciador n² */}
        <AnimatedSection delay="0.3s" className="mt-6 sm:mt-8">
          <div className="flex items-center gap-3 sm:gap-6 mb-8 sm:mb-12">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin-slow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L57 35L93 15L65 43L100 50L65 57L93 85L57 65L50 100L43 65L7 85L35 57L0 50L35 43L7 15L43 35L50 0Z" fill="#CDFC8A"/>
              </svg>
              <h3 className="text-xl sm:text-2xl font-display text-white tracking-widest text-center">
                el diferenciador n²
              </h3>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin-slow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L57 35L93 15L65 43L100 50L65 57L93 85L57 65L50 100L43 65L7 85L35 57L0 50L35 43L7 15L43 35L50 0Z" fill="#CDFC8A"/>
              </svg>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuresData.map((feat, i) => (
              <FeatureCard key={i} icon={feat.icon} title={feat.title} desc={feat.desc} />
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default VisionSection;

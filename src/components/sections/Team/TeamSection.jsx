import React from 'react';
import AnimatedSection from '../../common/AnimatedSection';
import FlipCard from './FlipCard';
import { teamData } from '../../../data/teamData';

export const TeamSection = () => {
  return (
    <section 
      id="equipo" 
      className="min-h-screen flex flex-col justify-center pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:pb-24 relative z-10 scroll-mt-20 md:scroll-mt-24 overflow-hidden"
    >
      {/* Elementos gráficos decorativos neo-brutalistas */}
      <svg 
        className="absolute top-12 left-4 sm:left-6 md:left-14 animate-spin-slow opacity-60 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 pointer-events-none z-0" 
        style={{ animationDirection: 'reverse' }} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 10 C 50 30, 70 50, 90 50 C 70 50, 50 70, 50 90 C 50 70, 30 50, 10 50 C 30 50, 50 30, 50 10 Z" fill="#CDFC8A"/>
      </svg>

      <svg 
        className="absolute bottom-12 right-4 sm:right-6 md:right-14 animate-float-2 opacity-50 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 pointer-events-none z-0" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 5L55 45L95 50L55 55L50 95L45 55L5 50L45 45Z" fill="#D2CBFE"/>
      </svg>

      {/* Contenedor centrado en pantalla */}
      <div className="container mx-auto px-4 md:px-10 relative z-10 my-auto">
        
        {/* Cabecera de Sección compacta y nítida */}
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4 sm:gap-6 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-white tracking-tight leading-none">
              las mentes <br/><span className="text-[#CDFC8A]">detrás</span>
            </h2>
          </div>
          <p className="text-gray-300 max-w-sm text-sm md:text-base leading-relaxed font-normal">
            Unimos ingeniería y creatividad para ofrecer resultados que no solo se ven bien, sino que rinden excepcionalmente.
          </p>
        </AnimatedSection>

        {/* Tarjetas Flip 3D al tamaño completo de la cuadrícula */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full">
          {teamData.map((member) => (
            <AnimatedSection key={member.id} delay={member.delay} className="w-full">
              <FlipCard member={member} />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;

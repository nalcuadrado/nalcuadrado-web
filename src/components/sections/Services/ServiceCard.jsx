import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ServiceCard = ({ item, theme = 'dev' }) => {
  const isDev = theme === 'dev';

  // Resplandor interior muy sutil y oscuro
  const innerGlow = isDev 
    ? 'bg-[#3C183C]/30 group-hover:bg-[#3C183C]/50' 
    : 'bg-[#022E21]/40 group-hover:bg-[#022E21]/60';

  const iconBoxStyles = isDev
    ? 'bg-[#3C183C]/80 border border-white/10 text-[#CDFC8A] group-hover:bg-[#CDFC8A] group-hover:text-[#022E21]'
    : 'bg-[#022E21]/80 border border-white/10 text-[#CDFC8A] group-hover:bg-[#CDFC8A] group-hover:text-[#022E21]';

  return (
    <div className="bg-[#121212]/95 rounded-[2.5rem] p-10 border border-white/10 hover:border-[#CDFC8A]/50 transition-all duration-300 group relative overflow-hidden hover:-translate-y-2 cursor-pointer shadow-2xl backdrop-blur-xl">
      {/* Sombra de iluminación suave interior */}
      <div className={`absolute top-0 right-0 w-40 h-40 ${innerGlow} rounded-full filter blur-[50px] transition-all duration-500 pointer-events-none`}></div>
      
      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-[1.5rem] border ${iconBoxStyles} flex items-center justify-center mb-8 transition-colors duration-300 shadow-md`}>
          {item.icon}
        </div>
        
        {/* Título de alto contraste en blanco puro */}
        <h3 className="text-3xl text-white mb-4 font-display font-bold tracking-tight">
          {item.title}
        </h3>
        
        {/* Descripción clara y 100% legible */}
        <p className="text-gray-300 text-base leading-relaxed mb-8 font-normal">
          {item.desc}
        </p>
        
        {/* Botón de acción en Fresh Lime de la marca */}
        <div className="text-sm text-[#CDFC8A] group-hover:text-white uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all font-bold">
          Explorar Detalles <ArrowRight size={16} className="-rotate-45" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

import React from 'react';

/**
 * BackgroundGlows: Fondo atmosférico con gradientes oscuros y profundos.
 * Se eliminaron tonos claros difuminados que lavaban el fondo para garantizar
 * un contraste 100% negro y nítido para todos los textos de la página.
 */
export const BackgroundGlows = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-grid-pattern">
      {/* Resplandor superior izquierdo: Dark Purple profundo (#3C183C) */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-[#3C183C] rounded-full mix-blend-screen filter blur-[170px] opacity-25"></div>
      
      {/* Resplandor lateral derecho: Forest Green oscuro (#022E21) */}
      <div className="absolute top-[30%] right-[-15%] w-[55vw] h-[55vw] bg-[#022E21] rounded-full mix-blend-screen filter blur-[160px] opacity-35"></div>
      
      {/* Resplandor inferior: Dark Purple sutil */}
      <div className="absolute bottom-[-15%] left-[15%] w-[50vw] h-[50vw] bg-[#2A102A] rounded-full mix-blend-screen filter blur-[170px] opacity-20"></div>
    </div>
  );
};

export default BackgroundGlows;

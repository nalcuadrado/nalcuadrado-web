import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import HeroDecorations from './HeroDecorations';
import FloatingPill from './FloatingPill';

export const HeroSection = ({ scrollTo }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const title1Ref = useRef(null);
  const badgeRef = useRef(null);
  const title2Ref = useRef(null);
  const widgetsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from(title1Ref.current, {
        y: 80,
        opacity: 0,
        scale: 0.94,
        duration: 1.1,
        delay: 0.2
      })
      .from(badgeRef.current, {
        scale: 0.5,
        rotate: -12,
        opacity: 0,
        duration: 0.9,
        ease: 'back.out(1.8)'
      }, '-=0.6')
      .from(title2Ref.current, {
        y: 60,
        opacity: 0,
        duration: 0.9
      }, '-=0.6')
      .from(widgetsRef.current?.children || [], {
        y: 50,
        opacity: 0,
        scale: 0.9,
        stagger: 0.15,
        duration: 1,
        ease: 'back.out(1.5)'
      }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 40; 
    const y = (e.clientY / innerHeight - 0.5) * 40;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      id="inicio" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex items-center justify-center pt-32 sm:pt-36 md:pt-44 pb-16 sm:pb-24 rounded-b-[2.5rem] md:rounded-b-[4rem] relative overflow-hidden border-b border-white/5 perspective-1000 bg-[#050505] scroll-mt-24"
    >
      <HeroDecorations />

      <div className="container mx-auto px-4 md:px-10 relative z-20 flex flex-col items-center justify-center h-full w-full mt-4 sm:mt-8">
        
        {/* Gran Título Central con Parallax e Intro GSAP */}
        <div 
          className="text-center transition-transform duration-300 ease-out z-30 relative w-full mb-10 sm:mb-16 md:mb-20"
          style={{ transform: `translate3d(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px, 0px)` }}
        >
          <h1 ref={title1Ref} className="text-4xl sm:text-6xl md:text-[7.5rem] lg:text-[10rem] font-display tracking-tighter text-white leading-[0.92] drop-shadow-2xl">
            potenciamos
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2 sm:mt-3">
            <div ref={badgeRef} className="bg-[#022E21]/60 border border-[#022E21] backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 rounded-full transform -rotate-2 shadow-[0_0_35px_rgba(2,46,33,0.6)]">
              <span className="text-3xl sm:text-5xl md:text-[6.5rem] lg:text-[8rem] font-display tracking-tighter text-[#CDFC8A] leading-none block">
                tu marca
              </span>
            </div>
          </div>

          <h1 ref={title2Ref} className="text-2xl sm:text-4xl md:text-[4.5rem] lg:text-[6rem] font-display tracking-tighter text-white leading-[0.92] drop-shadow-2xl mt-2.5 sm:mt-4">
            al cuadrado
          </h1>
        </div>

        {/* 3D Floating Widgets animados con GSAP */}
        <div ref={widgetsRef} className="relative w-full flex flex-col md:flex-row justify-center items-center gap-5 sm:gap-8 md:gap-10 transform-style-3d perspective-1000 z-40">
          <FloatingPill mousePos={mousePos} />

          {/* Call To Action Flotante */}
          <div 
            className="transition-transform duration-500 ease-out z-50 w-full sm:w-auto flex justify-center px-2 sm:px-0"
            style={{ transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 60px)` }}
          >
            <button 
              onClick={() => scrollTo('contacto')} 
              className="w-full sm:w-auto max-w-xs sm:max-w-none justify-center bg-[#CDFC8A] text-[#022E21] px-7 sm:px-10 py-3.5 sm:py-5 rounded-full font-bold uppercase tracking-widest text-sm sm:text-lg hover:bg-white transition-colors shadow-[0_0_50px_rgba(205,252,138,0.45)] flex items-center gap-3 cursor-pointer"
            >
              Comenzar Ahora <ArrowRight size={18} className="-rotate-45 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

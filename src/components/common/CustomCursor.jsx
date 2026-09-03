import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * CustomCursor: Cursor con físicas fluidas impulsadas por GSAP (quickTo),
 * aro exterior Fresh Lime (#CDFC8A) con efecto elástico magnético
 * y punto central Forest Green (#022E21).
 */
export const CustomCursor = () => {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // Solo activar en dispositivos con puntero fino (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    // Inicializar propiedades GSAP en el centro del elemento
    gsap.set([ring, dot], { xPercent: -50, yPercent: -50, opacity: 0 });

    // Creadores de interpolación de alta frecuencia rápida (quickTo) de GSAP
    const xDot = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power1.out' });
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power1.out' });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });

    let isVisible = false;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (!isVisible) {
        gsap.to([ring, dot], { opacity: 1, duration: 0.3 });
        isVisible = true;
      }
      xDot(clientX);
      yDot(clientY);
      xRing(clientX);
      yRing(clientY);
    };

    const handleMouseLeave = () => {
      gsap.to([ring, dot], { opacity: 0, duration: 0.3 });
      isVisible = false;
    };

    const handleMouseEnter = () => {
      gsap.to([ring, dot], { opacity: 1, duration: 0.3 });
      isVisible = true;
    };

    // Efecto de expansión y magnetismo al pasar sobre elementos interactivos
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], .cursor-pointer, .flip-inner');
      if (isInteractive) {
        gsap.to(ring, {
          scale: 1.7,
          backgroundColor: 'rgba(205, 252, 138, 0.15)',
          boxShadow: '0 0 30px rgba(205, 252, 138, 0.9)',
          duration: 0.3,
          ease: 'back.out(2)'
        });
        gsap.to(dot, {
          scale: 0.6,
          duration: 0.2
        });
      } else {
        gsap.to(ring, {
          scale: 1,
          backgroundColor: 'rgba(205, 252, 138, 0)',
          boxShadow: '0 0 15px rgba(205, 252, 138, 0.6)',
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(dot, {
          scale: 1,
          duration: 0.2
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Aro exterior fluido gobernado por GSAP quickTo */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border-2 border-[#CDFC8A] will-change-transform shadow-[0_0_15px_rgba(205,252,138,0.6)]"
      />

      {/* Punto central Forest Green reactivo */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#022E21] border border-[#CDFC8A]/60 will-change-transform shadow-sm"
      />
    </div>
  );
};

export default CustomCursor;

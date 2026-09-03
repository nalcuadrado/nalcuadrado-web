import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedSection: Envoltorio interactivo potenciado por GSAP y ScrollTrigger
 * para revelado cinemático con física suave al hacer scroll.
 */
export const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const delaySeconds = typeof delay === 'string' ? parseFloat(delay) || 0 : delay;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          y: 45,
          opacity: 0,
          scale: 0.98
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          delay: delaySeconds,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            end: 'bottom top',
            toggleActions: 'play reverse play reverse'
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={elRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;

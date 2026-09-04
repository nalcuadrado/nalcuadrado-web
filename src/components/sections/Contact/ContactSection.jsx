import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import AnimatedSection from '../../common/AnimatedSection';
import ContactForm from './ContactForm';
import { contactInfo } from '../../../data/navigationData';

export const ContactSection = () => {
  return (
    <section id="contacto" className="pt-28 md:pt-44 pb-20 md:pb-36 bg-transparent relative z-10 scroll-mt-20 md:scroll-mt-28 overflow-hidden">
      {/* Elementos gráficos decorativos estilo Neo-brutalista */}
      <svg 
        className="absolute top-12 left-4 sm:left-6 md:left-14 animate-spin-slow opacity-50 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 pointer-events-none z-0" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 0L57 35L93 15L65 43L100 50L65 57L93 85L57 65L50 100L43 65L7 85L35 57L0 50L35 43L7 15L43 35L50 0Z" fill="#CDFC8A"/>
      </svg>

      <svg 
        className="absolute bottom-16 right-4 sm:right-6 md:right-16 animate-float-2 opacity-40 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none z-0" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 5L55 45L95 50L55 55L50 95L45 55L5 50L45 45Z" fill="#D2CBFE"/>
      </svg>

      {/* Contenedor exactamente alineado con el ancho del Navbar */}
      <div className="container mx-auto px-4 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 relative z-10">
        
        {/* Columna Izquierda: Información de contacto */}
        <AnimatedSection delay="0.1s" className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display tracking-tight leading-[0.95] text-white mb-6 sm:mb-8">
              hagamos <br/> que <span className="text-[#CDFC8A]">suceda.</span>
            </h2>
            <p className="text-gray-300 font-normal text-base sm:text-lg md:text-xl max-w-sm mb-8 md:mb-12 leading-relaxed">
              Ya sea un MVP, una campaña global o una auditoría técnica. Completa el formulario y hablemos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row lg:flex-col gap-6 sm:gap-8 mb-8 lg:mb-0">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#CDFC8A] shadow-[0_0_20px_rgba(205,252,138,0.2)]">
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-white text-base sm:text-lg font-bold">{contactInfo.email}</p>
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mt-0.5">Escríbenos</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#CDFC8A] shadow-[0_0_20px_rgba(205,252,138,0.2)]">
                <MapPin size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-white text-base sm:text-lg font-bold">{contactInfo.location}</p>
                <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mt-0.5">{contactInfo.locationDetail}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Columna Derecha: Formulario de Contacto */}
        <AnimatedSection delay="0.2s" className="lg:col-span-7">
          <ContactForm />
        </AnimatedSection>

      </div>
    </section>
  );
};

export default ContactSection;

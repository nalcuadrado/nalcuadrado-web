import React from 'react';
import useScrollPosition from './hooks/useScrollPosition';
import BackgroundGlows from './components/common/BackgroundGlows';
import CustomCursor from './components/common/CustomCursor';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/Hero/HeroSection';
import ServicesSection from './components/sections/Services/ServicesSection';
import TeamSection from './components/sections/Team/TeamSection';
import VisionSection from './components/sections/Vision/VisionSection';
import ContactSection from './components/sections/Contact/ContactSection';
import Footer from './components/layout/Footer';

export default function App() {
  const isScrolled = useScrollPosition(20);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Deja el navbar flotando cómodamente arriba del título
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="text-[#F4F4F5] bg-[#050505] min-h-screen relative overflow-x-hidden selection:bg-[#CDFC8A] selection:text-[#022E21]">
      {/* Puntero personalizado interactivo (anillo verde con punto negro) */}
      <CustomCursor />

      {/* Luces y texturas ambientales de fondo */}
      <BackgroundGlows />

      {/* Navegación flotante superior */}
      <Navbar isScrolled={isScrolled} scrollTo={scrollTo} />

      {/* Contenido principal dividido en secciones modulares */}
      <main className="relative z-10 flex flex-col">
        <HeroSection scrollTo={scrollTo} />
        <ServicesSection />
        <TeamSection />
        <VisionSection />
        <ContactSection />
      </main>

      {/* Pie de página neo-brutalista curvo */}
      <Footer />
    </div>
  );
}

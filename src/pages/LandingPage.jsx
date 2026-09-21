import React from 'react';
import HeroSection from '../components/sections/Hero/HeroSection';
import ServicesSection from '../components/sections/Services/ServicesSection';
import TeamSection from '../components/sections/Team/TeamSection';
import VisionSection from '../components/sections/Vision/VisionSection';
import ContactSection from '../components/sections/Contact/ContactSection';

export const LandingPage = ({ scrollTo }) => {
  return (
    <main className="relative z-10 flex flex-col">
      <HeroSection scrollTo={scrollTo} />
      <ServicesSection />
      <TeamSection />
      <VisionSection />
      <ContactSection />
    </main>
  );
};

export default LandingPage;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useScrollPosition from './hooks/useScrollPosition';
import BackgroundGlows from './components/common/BackgroundGlows';
import CustomCursor from './components/common/CustomCursor';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';

function AppContent() {
  const isScrolled = useScrollPosition(20);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="text-[#F4F4F5] bg-[#050505] min-h-screen relative overflow-x-hidden selection:bg-[#CDFC8A] selection:text-[#022E21]">
      {/* Puntero personalizado interactivo */}
      <CustomCursor />

      {/* Luces y texturas ambientales de fondo */}
      <BackgroundGlows />

      {/* Restauración automática de scroll al cambiar de ruta */}
      <ScrollToTop />

      {/* Navegación flotante superior */}
      <Navbar isScrolled={isScrolled} scrollTo={scrollTo} />

      {/* Enrutador principal de vistas */}
      <Routes>
        <Route path="/" element={<LandingPage scrollTo={scrollTo} />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Pie de página neo-brutalista curvo */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import useScrollPosition from './hooks/useScrollPosition';
import BackgroundGlows from './components/common/BackgroundGlows';
import CustomCursor from './components/common/CustomCursor';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import ClientProposalPage from './pages/proposals/ClientProposalPage';

function AppContent() {
  const isScrolled = useScrollPosition(20);
  const location = useLocation();

  const isProposalRoute = location.pathname.startsWith('/propuesta');

  // Restaurar el cursor nativo en rutas de propuestas
  useEffect(() => {
    if (isProposalRoute) {
      document.body.classList.add('default-cursor');
    } else {
      document.body.classList.remove('default-cursor');
    }
    return () => {
      document.body.classList.remove('default-cursor');
    };
  }, [isProposalRoute]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen relative overflow-x-hidden ${isProposalRoute ? 'bg-[#2D1B4E]' : 'text-[#F4F4F5] bg-[#050505] selection:bg-[#CDFC8A] selection:text-[#022E21]'}`}>
      {/* Puntero personalizado interactivo (solo en vistas públicas) */}
      {!isProposalRoute && <CustomCursor />}

      {/* Luces y texturas ambientales de fondo (solo en rutas públicas de la agencia) */}
      {!isProposalRoute && <BackgroundGlows />}

      {/* Restauración automática de scroll al cambiar de ruta */}
      <ScrollToTop />

      {/* Navegación flotante superior (solo en vistas públicas) */}
      {!isProposalRoute && <Navbar isScrolled={isScrolled} scrollTo={scrollTo} />}

      {/* Enrutador principal de vistas */}
      <Routes>
        <Route path="/" element={<LandingPage scrollTo={scrollTo} />} />
        <Route path="/servicios" element={<ServicesPage />} />

        {/* Apartado privado de propuestas de estrategia (acceso directo no indexado) */}
        <Route path="/propuesta" element={<ClientProposalPage />} />
        <Route path="/propuesta-victoria" element={<ClientProposalPage />} />
        <Route path="/propuesta/:clientId" element={<ClientProposalPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Pie de página neo-brutalista curvo (solo en vistas públicas) */}
      {!isProposalRoute && <Footer />}
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

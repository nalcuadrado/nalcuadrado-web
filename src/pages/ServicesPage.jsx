import React, { useState, useRef, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight,
  MessageCircle 
} from 'lucide-react';
import gsap from 'gsap';
import { 
  softwarePackages, 
  marketingPackages, 
  getPackageWhatsAppUrl 
} from '../data/packagesData';

export const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('marketing');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const isInitialMount = useRef(true);

  const pageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const tabsRef = useRef(null);
  const cardsRef = useRef(null);
  const noteRef = useRef(null);

  const currentPackages = activeTab === 'software' ? softwarePackages : marketingPackages;

  // Detección de dispositivo para optimizar animaciones
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Animación de entrada GSAP optimizada: tarjetas visibles inmediatamente en mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(titleRef.current, 
        { y: isMobile ? 25 : 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: isMobile ? 0.5 : 0.8 }
      )
      .fromTo(subtitleRef.current, 
        { y: isMobile ? 15 : 25, opacity: 0 }, 
        { y: 0, opacity: 1, duration: isMobile ? 0.4 : 0.6 }, 
        '-=0.3'
      )
      .fromTo(tabsRef.current, 
        { scale: 0.9, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' }, 
        '-=0.3'
      );

      // En desktop animamos suavemente las tarjetas; en mobile se muestran al instante sin delay
      if (!isMobile && cardsRef.current?.children) {
        tl.fromTo(cardsRef.current.children, 
          { y: 30, opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, clearProps: 'all' }, 
          '-=0.2'
        );
      } else if (cardsRef.current?.children) {
        // En mobile aseguramos 100% de visibilidad inmediata
        gsap.set(cardsRef.current.children, { opacity: 1, y: 0, clearProps: 'all' });
      }

      if (noteRef.current) {
        tl.fromTo(noteRef.current, 
          { opacity: 0, y: 15 }, 
          { opacity: 1, y: 0, duration: 0.4, clearProps: 'all' }, 
          '-=0.2'
        );
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // Micro-animación al alternar pestañas
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (cardsRef.current?.children) {
      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.35, ease: 'power2.out', clearProps: 'all' }
      );
    }
    if (noteRef.current) {
      gsap.fromTo(noteRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', clearProps: 'all' }
      );
    }
  }, [activeTab]);

  // Parallax interactivo exclusivo para Desktop
  const handleMouseMove = (e) => {
    if (!isDesktop || !pageRef.current) return;
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; 
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={pageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4FF78] selection:text-[#0A0A0A] relative flex flex-col items-center pt-28 sm:pt-32 md:pt-40 pb-20 overflow-hidden"
    >
      {/* Fondo Aurora Dinámico */}
      <div className="hero-aurora"></div>

      {/* Luces y texturas ambientales de fondo */}
      <div className="absolute top-0 left-0 w-full h-[700px] bg-gradient-to-br from-[#2A0F2E]/30 via-transparent to-[#051409]/40 pointer-events-none z-0"></div>
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D4FF78] rounded-full blur-[250px] opacity-[0.09] pointer-events-none z-0"></div>

      {/* Elementos gráficos decorativos estilo Neo-brutalista */}
      <svg 
        className="absolute top-[14%] left-[4%] sm:left-[8%] animate-spin-slow opacity-80 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 pointer-events-none z-10" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 0L57 35L93 15L65 43L100 50L65 57L93 85L57 65L50 100L43 65L7 85L35 57L0 50L35 43L7 15L43 35L50 0Z" fill="#CDFC8A"/>
      </svg>

      <svg 
        className="absolute top-[52%] right-[3%] sm:right-[6%] animate-float-2 opacity-70 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 pointer-events-none z-10" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 5L55 45L95 50L55 55L50 95L45 55L5 50L45 45Z" fill="#D2CBFE"/>
      </svg>

      <svg 
        className="absolute top-[20%] right-[6%] sm:right-[12%] animate-spin-slow opacity-70 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 pointer-events-none z-10" 
        style={{ animationDirection: 'reverse' }} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 10 C 50 30, 70 50, 90 50 C 70 50, 50 70, 50 90 C 50 70, 30 50, 10 50 C 30 50, 50 30, 50 10 Z" fill="#CDFC8A"/>
      </svg>

      {/* Contenedor Principal */}
      <div className="w-full flex flex-col items-center px-4 sm:px-8 relative z-20">
        
        {/* Cabecera de la página */}
        <div 
          className="text-center mb-10 sm:mb-14 relative w-full max-w-4xl flex flex-col items-center transition-transform duration-300 ease-out"
          style={isDesktop ? { transform: `translate3d(${mousePos.x * 0.12}px, ${mousePos.y * 0.12}px, 0px)` } : undefined}
        >
          <h1 
            ref={titleRef} 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-white tracking-tight mb-4 drop-shadow-2xl leading-[0.95]"
          >
            Nuestros <span className="text-[#CDFC8A] drop-shadow-[0_0_35px_rgba(205,252,138,0.4)]">Servicios</span>
          </h1>
          
          <p 
            ref={subtitleRef} 
            className="text-gray-300 font-normal text-sm sm:text-base md:text-xl max-w-xl mb-8 leading-relaxed"
          >
            Planes estratégicos diseñados para impulsar tu negocio con ingeniería de software y marketing de alto impacto.
          </p>

          {/* Selector de Pestañas (Pills) */}
          <div 
            ref={tabsRef}
            className="inline-flex bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl transition-transform duration-300"
            style={isDesktop ? { transform: `translate3d(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px, 0px)` } : undefined}
          >
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'marketing' 
                  ? 'bg-[#CDFC8A] text-[#022E21] shadow-[0_0_25px_rgba(205,252,138,0.5)] scale-105' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Marketing
            </button>
            <button
              onClick={() => setActiveTab('software')}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'software' 
                  ? 'bg-[#CDFC8A] text-[#022E21] shadow-[0_0_25px_rgba(205,252,138,0.5)] scale-105' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Desarrollo de Software
            </button>
          </div>
        </div>

        {/* Cuadrícula de Tarjetas: Siempre 100% visible sin retrasos ni parpadeos */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl z-20"
          style={isDesktop ? { transform: `translate3d(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px, 0px)` } : undefined}
        >
          {currentPackages.map((pkg) => {
            const waUrl = getPackageWhatsAppUrl(pkg, activeTab);

            return (
              <div 
                key={pkg.id}
                className="flex flex-col relative rounded-3xl p-6 sm:p-8 transition-all duration-300 border border-white/10 bg-[#121212]/85 hover:border-[#CDFC8A]/60 hover:bg-[#141812]/95 backdrop-blur-xl shadow-2xl hover:shadow-[0_0_40px_rgba(205,252,138,0.15)] group hover:-translate-y-2 cursor-default"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#2A0A4A] flex items-center justify-center text-[#CDFC8A] mb-4 border border-white/5 shadow-inner transition-transform duration-300 group-hover:scale-110">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{pkg.title}</h3>
                  <p className="text-[#CDFC8A] text-xs sm:text-sm font-semibold uppercase tracking-wider">{pkg.subtitle}</p>
                </div>

                <ul className="space-y-3.5 mb-10 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#CDFC8A] mr-3 flex-shrink-0 mt-0.5 opacity-90" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón de acción directo a WhatsApp */}
                <a 
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contratar o cotizar ${pkg.title} por WhatsApp`}
                  className="w-full mt-auto bg-[#3C183C] hover:bg-[#522252] text-[#D2CBFE] hover:text-white py-4 px-4 rounded-2xl font-bold text-base sm:text-lg shadow-lg flex justify-center items-center gap-3 border border-[#D2CBFE]/30 hover:border-[#D2CBFE]/60 transition-all hover:scale-[1.02] cursor-pointer group/btn"
                >
                  <MessageCircle size={20} className="text-[#CDFC8A] group-hover/btn:scale-110 transition-transform" />
                  <span>{pkg.price}</span>
                  <ArrowRight size={18} className="-rotate-45 text-[#CDFC8A] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Nota del pie según pestaña activa */}
        <div 
          ref={noteRef}
          className="mt-14 sm:mt-16 max-w-4xl w-full text-center z-20 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl"
        >
          {activeTab === 'software' ? (
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              <strong className="text-[#CDFC8A]">Nota:</strong> El diseño y desarrollo están cubiertos al 100%. Los servicios de infraestructura (Dominio, Hosting y licencias de tiendas de apps) se gestionan y pagan por separado a los proveedores correspondientes, con mi acompañamiento.
            </p>
          ) : (
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              <strong className="text-[#CDFC8A]">Nota:</strong> Nuestros servicios son exclusivamente para <span className="text-white font-medium">Instagram y TikTok</span> (otras redes tienen costo adicional). El Branding y Rebranding tienen un costo adicional. El presupuesto de inversión para campañas de Ads corre por cuenta del cliente.
            </p>
          )}
        </div>

      </div>

    </div>
  );
};

export default ServicesPage;

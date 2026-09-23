import React, { useState, useEffect } from 'react';
import { victoriaProposalData } from './proposalData';

/**
 * Vista de propuesta estratégica de alto impacto para clientes (Victoria Fernández x N²).
 * Almacenada en su módulo dedicado 'src/pages/proposals/' y estilizada al 100% con Tailwind CSS.
 */
export const ClientProposalPage = () => {
  const [activeTab, setActiveTab] = useState('intro');
  const data = victoriaProposalData;

  useEffect(() => {
    document.title = `Propuesta Estratégica: ${data.clientName} x ${data.agencyName}`;
  }, [data]);

  // Paleta de fondos suaves por pestaña activa
  const tabBgColors = {
    intro: '#FDFBF7',
    plan1: '#F4FAEF',
    plan2: '#FDE8F1',
    plan3: '#E8E2F2'
  };

  const getWhatsAppLink = (planName) => {
    const text = encodeURIComponent(`Hola equipo de N², estuve revisando la propuesta estratégica personalizada y me gustaría avanzar con el ${planName}.`);
    return `https://wa.me/584220095538?text=${text}`;
  };

  return (
    <div
      className="min-h-screen py-6 sm:py-8 lg:py-0 lg:h-screen w-full flex flex-col justify-start lg:justify-center items-center px-3 sm:px-6 lg:px-8 lg:overflow-hidden font-['Outfit',sans-serif] bg-[#2D1B4E] text-[#2D1B4E] selection:bg-[#F72585] selection:text-white"
      style={{
        backgroundImage: 'radial-gradient(circle at 100% 150%, #F72585 24%, transparent 24%, transparent 28%, #F72585 28%, transparent 29%, transparent 33%, #F72585 33%, transparent 34%, transparent 38%, #F72585 38%, transparent 39%, transparent 43%, #F72585 43%, transparent 44%, transparent 48%, #F72585 48%, transparent 49%, transparent 53%, #F72585 53%, transparent 54%, transparent 58%, #F72585 58%, transparent 59%, transparent 63%, #F72585 63%, transparent 64%, transparent 68%, #F72585 68%, transparent 69%, transparent 73%, #F72585 73%, transparent 74%, transparent 78%, #F72585 78%, transparent 79%, transparent 83%, #F72585 83%, transparent 84%, transparent 88%, #F72585 88%, transparent 89%, transparent 93%, #F72585 93%, transparent 94%, transparent 98%, #F72585 98%, transparent 99%, transparent 100%)',
        backgroundSize: '150px 150px',
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Contenedor Carpeta (Folder Container) */}
      <div className="w-full max-w-[1200px] min-h-0 lg:h-[88vh] lg:max-h-[850px] relative flex flex-col drop-shadow-[0_15px_35px_rgba(0,0,0,0.35)] lg:drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)] my-auto transition-all duration-300">
        
        {/* Pestañas de la Carpeta (Tabs Adaptativas - Sin Recortes) */}
        <div className="w-full grid grid-cols-4 gap-1 sm:gap-2 px-1 sm:px-3 z-10 select-none pt-2 -mt-2 pb-1" role="tablist">
          {/* Pestaña Intro */}
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'intro'}
            onClick={() => setActiveTab('intro')}
            className={`relative flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3.5 px-1 sm:px-3 text-center transition-all duration-300 shadow-[0_-2px_8px_rgba(0,0,0,0.05)] cursor-pointer truncate ${
              activeTab === 'intro'
                ? 'bg-[#FDFBF7] text-[#2D1B4E] font-bold z-20 pb-4 sm:pb-6 -mb-2.5 sm:-mb-3 rounded-t-xl sm:rounded-t-2xl shadow-[0_-4px_15px_rgba(0,0,0,0.06)]'
                : 'bg-[#E0D9EC] text-[#5E5473] hover:text-[#2D1B4E] hover:bg-[#E8E2F2] pb-3 sm:pb-4 -mb-2 rounded-t-lg sm:rounded-t-xl opacity-90'
            }`}
          >
            <i className="fa-regular fa-star text-yellow-500 text-xs sm:text-sm shrink-0" />
            <span className="text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold truncate">
              Propuesta
            </span>
          </button>

          {/* Pestañas de Planes */}
          {data.plans.map((plan) => {
            const isActive = activeTab === plan.id;
            return (
              <button
                key={plan.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(plan.id)}
                style={isActive ? { backgroundColor: tabBgColors[plan.id] } : {}}
                className={`relative flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3.5 px-1 sm:px-3 text-center transition-all duration-300 shadow-[0_-2px_8px_rgba(0,0,0,0.05)] cursor-pointer truncate ${
                  isActive
                    ? 'text-[#2D1B4E] font-bold z-20 pb-4 sm:pb-6 -mb-2.5 sm:-mb-3 rounded-t-xl sm:rounded-t-2xl shadow-[0_-4px_15px_rgba(0,0,0,0.06)]'
                    : 'bg-[#E0D9EC] text-[#5E5473] hover:text-[#2D1B4E] hover:bg-[#E8E2F2] pb-3 sm:pb-4 -mb-2 rounded-t-lg sm:rounded-t-xl opacity-90'
                }`}
              >
                <i className={`${plan.tabIcon} ${plan.tabIconColor} text-xs sm:text-sm shrink-0`} />
                <span className="text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold truncate">
                  <span className="hidden sm:inline">Plan </span>
                  {plan.shortName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Cuerpo Principal de la Carpeta (Folder Body) */}
        <div
          className="flex-grow rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 relative z-10 overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] transition-colors duration-500 min-h-0 lg:min-h-[550px] flex flex-col justify-between"
          style={{ backgroundColor: tabBgColors[activeTab] || '#FDFBF7' }}
        >
          {/* TAB 1: PORTADA EDITORIAL */}
          {activeTab === 'intro' && (
            <div className="relative h-full flex flex-col justify-between animate-[fadeIn_0.4s_ease-out]">
              {/* Formas decorativas estilo scrapbook (confinadas limpiamente al contenedor) */}
              <div className="absolute top-0 right-0 w-36 h-36 md:w-64 md:h-64 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-[#F72585] opacity-15 pointer-events-none animate-pulse" />
              <div
                className="absolute bottom-4 left-4 w-24 h-24 md:w-40 md:h-40 rounded-full opacity-30 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#B5E48C 20%, transparent 20%)',
                  backgroundSize: '10px 10px'
                }}
              />
              <div
                className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(#2D1B4E 1px, transparent 1px), linear-gradient(90deg, #2D1B4E 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="relative z-10 flex flex-col lg:flex-row h-full items-center justify-between gap-6 sm:gap-8 py-2 md:py-4">
                {/* Textos Principales */}
                <div className="w-full lg:w-6/12 xl:w-7/12 lg:pr-2 xl:pr-4 flex flex-col justify-center">
                  <div className="inline-block px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 font-bold text-xs sm:text-sm tracking-widest mb-3 sm:mb-5 border border-purple-200 self-start">
                    {data.badge}
                  </div>

                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#2D1B4E] leading-tight mb-2">
                    {data.titlePrefix}<br />
                    <span className="text-[#F72585]">{data.clientName}</span>
                  </h1>

                  {/* Cita reflexiva */}
                  <div className="mt-4 sm:mt-6 md:mt-8 relative">
                    <i className="fa-solid fa-quote-left text-2xl sm:text-3xl md:text-4xl text-[#B5E48C]/50 absolute -top-3 sm:-top-4 -left-2.5 sm:-left-4 z-0" />
                    <p className="font-['Playfair_Display',serif] italic text-base sm:text-xl md:text-2xl text-gray-700 relative z-10 leading-snug pl-3 sm:pl-4 border-l-4 border-[#B5E48C]">
                      {data.quote.part1}<br />
                      <span className="font-semibold text-[#2D1B4E] not-italic">{data.quote.part2}</span>
                    </p>
                  </div>

                  <p className="mt-3 sm:mt-5 md:mt-6 text-gray-600 font-medium text-sm sm:text-base md:text-lg w-full lg:w-11/12 leading-relaxed">
                    {data.description}
                  </p>

                  <div className="mt-4 sm:mt-6 md:mt-8 pt-3 flex items-center gap-3 text-xs md:text-sm font-bold text-gray-400">
                    <img
                      src="/ISOTIPO.svg"
                      alt="Logo N²"
                      className="h-6 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    <span className="text-gray-500 font-semibold">{data.year}</span>
                  </div>

                  {/* Botón CTA rápido para móviles y tablets */}
                  <div className="mt-5 flex lg:hidden">
                    <button
                      type="button"
                      onClick={() => setActiveTab('plan1')}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#2D1B4E] hover:bg-[#F72585] text-white font-bold text-sm transition-all shadow-md"
                    >
                      Explorar Planes Estratégicos
                      <i className="fa-solid fa-arrow-right ml-1" />
                    </button>
                  </div>
                </div>

                {/* Elemento gráfico Victoria Fernández en el espacio central */}
                <div className="flex items-center justify-center shrink-0 self-center z-10 pointer-events-none my-3 lg:my-0 lg:-mx-4 xl:-mx-8">
                  <img
                    src="/propuestas/elemento-victoria.svg"
                    alt="Elemento gráfico Victoria"
                    className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-40 h-auto max-h-24 lg:max-h-32 object-contain drop-shadow-sm opacity-90 transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Elemento Visual: Polaroid con Pin */}
                <div className="w-full lg:w-5/12 xl:w-4/12 flex justify-center items-center relative py-2 sm:py-4">
                  <div className="absolute w-56 h-60 sm:w-72 sm:h-80 bg-[#E8E2F2] rounded-3xl transform rotate-6 right-2 sm:right-8 top-6 sm:top-8 z-0 hidden sm:block" />

                  <div className="bg-white p-3 pb-7 sm:pb-9 shadow-[2px_5px_15px_rgba(0,0,0,0.15)] -rotate-2 sm:-rotate-3 hover:rotate-0 hover:scale-[1.02] transition-all duration-300 relative z-10 hover:z-30 hover:shadow-[4px_10px_25px_rgba(0,0,0,0.2)] max-w-[260px] sm:max-w-none">
                    {/* Pin de Chincheta */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#B5E48C] shadow-[inset_-2px_-2px_5px_rgba(0,0,0,0.3),2px_2px_5px_rgba(0,0,0,0.2)] z-10 flex items-center justify-center after:content-[''] after:w-2 after:h-2 after:bg-white after:rounded-full after:opacity-60" />

                    <div className="w-48 h-56 sm:w-64 sm:h-72 bg-gray-200 overflow-hidden relative rounded-sm">
                      <img
                        src={data.polaroid.imageUrl}
                        alt={data.polaroid.altText}
                        className="w-full h-full object-cover grayscale-[20%] sepia-[10%] opacity-90 transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#2D1B4E] mix-blend-overlay opacity-20 pointer-events-none" />
                    </div>
                    <div className="text-center mt-2.5 sm:mt-3 font-['Playfair_Display',serif] italic text-[#2D1B4E] font-semibold text-sm sm:text-base flex items-center justify-center gap-2">
                      <i className="fa-solid fa-brain text-[#F72585] text-xs sm:text-sm" /> {data.polaroid.caption}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PLAN 1 (Brote) */}
          {activeTab === 'plan1' && (
            <div className="h-full flex flex-col animate-[fadeIn_0.4s_ease-out]">
              <div className="flex items-center mb-4 sm:mb-6 shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 text-xl sm:text-3xl shadow-sm mr-3 sm:mr-4 shrink-0">
                  <i className="fa-solid fa-seedling" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2D1B4E]">
                    Plan 1: <span className="text-green-600">Brote</span>
                  </h2>
                  <p className="text-gray-500 font-medium text-xs sm:text-sm md:text-base">
                    Mantenimiento constante y presencia activa.
                  </p>
                  <div className="mt-1 text-xl sm:text-2xl font-black text-green-700">
                    $400 <span className="text-xs sm:text-sm font-normal text-gray-500">/ mes</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-8 flex-grow lg:overflow-hidden pb-2 lg:pb-4">
                {/* Entregables */}
                <div className="w-full lg:w-7/12 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] lg:h-full lg:overflow-y-auto pr-3 sm:pr-4 border border-green-50">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 text-[#2D1B4E] border-b pb-2 flex justify-between items-center">
                    ¿Qué incluye?
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {data.plans[0].deliverables.map((item, index) => (
                      <li key={index} className="flex items-start text-xs sm:text-sm lg:text-base text-[#5E5473] leading-relaxed">
                        <i className="fa-solid fa-check text-green-600 mr-2.5 sm:mr-3 mt-1 shrink-0" />
                        <div>
                          {item.label && <strong className="text-gray-800 font-bold mr-1">{item.label}</strong>}
                          <span>{item.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resumen Visual */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center shrink-0">
                  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Ideal para:</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                      Mantener la interacción y asegurar que tu audiencia tenga contenido constante.
                    </p>

                    <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mb-4 sm:mb-6">
                      <div className="bg-gray-50 rounded-xl p-2.5 sm:p-3 border border-gray-100">
                        <div className="text-xl sm:text-2xl font-black text-[#2D1B4E]">4</div>
                        <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-wide mt-1">Posts Cortos/Sem</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2.5 sm:p-3 border border-gray-100">
                        <div className="text-xl sm:text-2xl font-black text-[#2D1B4E]">2</div>
                        <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-wide mt-1">YouTube/Mes</div>
                      </div>
                    </div>

                    <a
                      href={getWhatsAppLink('Plan Brote')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
                    >
                      <i className="fa-brands fa-whatsapp text-base sm:text-lg" />
                      Elegir Plan Brote
                    </a>
                  </div>

                  {/* Navegación rápida móvil entre planes */}
                  <div className="mt-3 pt-2 flex items-center justify-between lg:hidden text-xs font-semibold text-gray-500">
                    <button type="button" onClick={() => setActiveTab('intro')} className="hover:text-[#2D1B4E] flex items-center gap-1 py-1">
                      <i className="fa-solid fa-chevron-left text-[10px]" /> Portada
                    </button>
                    <button type="button" onClick={() => setActiveTab('plan2')} className="hover:text-[#F72585] text-[#F72585] font-bold flex items-center gap-1 py-1">
                      Plan Expansión <i className="fa-solid fa-chevron-right text-[10px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PLAN 2 (Expansión - DESTACADO) */}
          {activeTab === 'plan2' && (
            <div className="h-full flex flex-col animate-[fadeIn_0.4s_ease-out]">
              <div className="flex items-center justify-between mb-4 sm:mb-6 shrink-0">
                <div className="flex items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#F72585] flex items-center justify-center text-white text-xl sm:text-3xl shadow-lg shadow-pink-200 mr-3 sm:mr-4 shrink-0">
                    <i className="fa-solid fa-fire-flame-curved" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2D1B4E] flex items-center flex-wrap gap-1.5 sm:gap-2">
                      Plan 2: <span className="text-[#F72585]">Expansión</span>
                      <i className="fa-solid fa-sparkles text-yellow-400 text-sm sm:text-base" />
                    </h2>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">
                      Equilibrio perfecto entre atracción masiva y fidelización profunda.
                    </p>
                    <div className="mt-1 text-xl sm:text-2xl font-black text-[#F72585]">
                      $500 <span className="text-xs sm:text-sm font-normal text-gray-500">/ mes</span>
                    </div>
                  </div>
                </div>

                {/* Elemento gráfico Victoria en cabecera del plan */}
                <div className="hidden sm:flex items-center pr-2">
                  <img
                    src="/propuestas/elemento-victoria.svg"
                    alt="Elemento gráfico Victoria"
                    className="h-10 sm:h-12 md:h-14 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-8 flex-grow lg:overflow-hidden pb-2 lg:pb-4">
                {/* Entregables (Plan Destacado con acento fucsia) */}
                <div className="w-full lg:w-7/12 bg-gradient-to-b from-white to-[#FFF5F9] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 shadow-[0_15px_40px_rgba(247,37,133,0.12)] lg:h-full lg:overflow-y-auto pr-3 sm:pr-4 border-2 border-[#F72585] scale-[1.005]">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 text-[#2D1B4E] border-b border-pink-100 pb-2 flex justify-between items-center">
                    ¿Qué incluye?
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {data.plans[1].deliverables.map((item, index) => (
                      <li key={index} className="flex items-start text-xs sm:text-sm lg:text-base text-[#5E5473] leading-relaxed">
                        <i className="fa-solid fa-check text-[#F72585] mr-2.5 sm:mr-3 mt-1 shrink-0 font-bold" />
                        <div>
                          {item.label && (
                            <strong className={`font-bold mr-1 ${item.isPill ? 'bg-yellow-100 text-[#2D1B4E] px-1.5 py-0.5 rounded text-[11px] sm:text-xs' : item.highlightColor || 'text-gray-800'}`}>
                              {item.label}
                            </strong>
                          )}
                          <span>{item.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resumen Visual */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center shrink-0">
                  <div className="bg-gradient-to-br from-pink-50 to-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl text-center relative overflow-hidden border border-pink-100">
                    <i className="fa-solid fa-spa absolute -top-4 -left-4 text-4xl sm:text-6xl text-pink-200 opacity-30 transform -rotate-12 pointer-events-none" />
                    <i className="fa-solid fa-leaf absolute -bottom-4 -right-4 text-4xl sm:text-6xl text-green-200 opacity-30 transform rotate-12 pointer-events-none" />

                    {/* Elemento gráfico Victoria en tarjeta de resumen */}
                    <div className="flex justify-center mb-1.5 sm:mb-2 relative z-10">
                      <img
                        src="/propuestas/elemento-victoria.svg"
                        alt="Elemento gráfico Victoria"
                        className="h-8 sm:h-10 md:h-12 w-auto object-contain drop-shadow-sm"
                      />
                    </div>

                    <h4 className="font-bold text-[#F72585] mb-1 sm:mb-2 tracking-wide uppercase text-xs sm:text-sm relative z-10">
                      Crecimiento Equilibrado
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3.5 sm:mb-5 font-medium relative z-10 leading-relaxed">
                      Potenciamos tu marca y le damos visibilidad constante, logrando que tu cuenta crezca de forma orgánica y saludable.
                    </p>

                    <div className="flex justify-center gap-2 sm:gap-3 relative z-10 mb-3 sm:mb-4">
                      <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-pink-100 w-1/2 shadow-sm">
                        <div className="text-xl sm:text-2xl font-black text-[#2D1B4E]">7</div>
                        <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-wide mt-1 leading-tight">
                          Posts Cortos/Sem
                        </div>
                      </div>
                      <div className="bg-pink-50 rounded-xl p-2.5 sm:p-3 border border-pink-200 shadow-sm w-1/2">
                        <div className="text-xl sm:text-2xl font-black text-[#F72585]">4</div>
                        <div className="text-[10px] sm:text-xs text-pink-700 uppercase font-bold tracking-wide mt-1 leading-tight">
                          YouTube/Mes
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/70 backdrop-blur text-[11px] sm:text-xs py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-lg border border-pink-100 text-[#2D1B4E] font-medium relative z-10 mb-3.5 sm:mb-5">
                      <i className="fa-solid fa-heart-pulse mr-1.5 text-[#F72585]" />
                      Incluye Publicación y Monitorización
                    </div>

                    <a
                      href={getWhatsAppLink('Plan Expansión')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 px-4 rounded-xl bg-[#F72585] hover:bg-[#e01976] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg relative z-10"
                    >
                      <i className="fa-brands fa-whatsapp text-base sm:text-lg" />
                      Elegir Plan Expansión
                    </a>
                  </div>

                  {/* Navegación rápida móvil entre planes */}
                  <div className="mt-3 pt-2 flex items-center justify-between lg:hidden text-xs font-semibold text-gray-500">
                    <button type="button" onClick={() => setActiveTab('plan1')} className="hover:text-[#2D1B4E] flex items-center gap-1 py-1">
                      <i className="fa-solid fa-chevron-left text-[10px]" /> Plan Brote
                    </button>
                    <button type="button" onClick={() => setActiveTab('plan3')} className="hover:text-purple-700 text-purple-700 font-bold flex items-center gap-1 py-1">
                      Plan Dosel <i className="fa-solid fa-chevron-right text-[10px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PLAN 3 (Dosel - ACTUALIZADO A $750) */}
          {activeTab === 'plan3' && (
            <div className="h-full flex flex-col animate-[fadeIn_0.4s_ease-out]">
              <div className="flex items-center mb-4 sm:mb-6 shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 text-xl sm:text-3xl shadow-sm mr-3 sm:mr-4 border border-purple-200 shrink-0">
                  <i className="fa-solid fa-crown" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2D1B4E]">
                    Plan 3: <span className="text-purple-700">Dosel</span>
                  </h2>
                  <p className="text-gray-500 font-medium text-xs sm:text-sm md:text-base">
                    Dominio omnicanal y gestión comunitaria 360.
                  </p>
                  <div className="mt-1 text-xl sm:text-2xl font-black text-purple-700">
                    $750 <span className="text-xs sm:text-sm font-normal text-gray-500">/ mes</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 lg:gap-8 flex-grow lg:overflow-hidden pb-2 lg:pb-4">
                {/* Entregables */}
                <div className="w-full lg:w-7/12 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] lg:h-full lg:overflow-y-auto pr-3 sm:pr-4 border border-purple-50">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 text-[#2D1B4E] border-b pb-2 flex justify-between items-center">
                    ¿Qué incluye?
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {data.plans[2].deliverables.map((item, index) => (
                      <li key={index} className="flex items-start text-xs sm:text-sm lg:text-base text-[#5E5473] leading-relaxed">
                        <i className="fa-solid fa-check text-purple-700 mr-2.5 sm:mr-3 mt-1 shrink-0 font-bold" />
                        <div>
                          {item.label && (
                            <strong className={`font-bold mr-1 ${item.highlightColor || 'text-gray-800'}`}>
                              {item.label}
                            </strong>
                          )}
                          <span>{item.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resumen Visual */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center shrink-0">
                  <div className="bg-purple-50 p-4 sm:p-6 rounded-2xl shadow-sm border border-purple-100 text-center relative">
                    <h4 className="font-bold text-[#2D1B4E] mb-1 sm:mb-2 text-sm sm:text-lg">Máximo Alcance</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      Para delegar el 100% de la operatividad y la interacción. Requiere un volumen muy alto de grabación de tu parte.
                    </p>

                    <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mb-4 sm:mb-5">
                      <div className="bg-white rounded-xl p-2.5 sm:p-3 shadow-sm border border-purple-100">
                        <div className="text-xl sm:text-2xl font-black text-purple-700">11</div>
                        <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-wide mt-1 leading-tight">
                          Posts Cortos/Sem
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-2.5 sm:p-3 shadow-sm border border-purple-100">
                        <div className="text-xl sm:text-2xl font-black text-purple-700">8</div>
                        <div className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-wide mt-1 leading-tight">
                          YouTube/Mes
                        </div>
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-purple-800 bg-purple-100 py-2 sm:py-2.5 px-3 rounded-lg mb-4 sm:mb-6">
                      Delegación Total de CM + Respuestas
                    </div>

                    <a
                      href={getWhatsAppLink('Plan Dosel')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 px-4 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg"
                    >
                      <i className="fa-brands fa-whatsapp text-base sm:text-lg" />
                      Elegir Plan Dosel
                    </a>
                  </div>

                  {/* Navegación rápida móvil entre planes */}
                  <div className="mt-3 pt-2 flex items-center justify-between lg:hidden text-xs font-semibold text-gray-500">
                    <button type="button" onClick={() => setActiveTab('plan2')} className="hover:text-[#F72585] flex items-center gap-1 py-1">
                      <i className="fa-solid fa-chevron-left text-[10px]" /> Plan Expansión
                    </button>
                    <button type="button" onClick={() => setActiveTab('intro')} className="hover:text-[#2D1B4E] flex items-center gap-1 py-1">
                      Portada <i className="fa-solid fa-rotate-left text-[10px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ClientProposalPage;

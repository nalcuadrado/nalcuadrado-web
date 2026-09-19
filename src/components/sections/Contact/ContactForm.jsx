import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CircleCheck, ChevronDown, Check } from 'lucide-react';
import { contactInfo } from '../../../data/navigationData';

const serviceOptions = [
  { value: 'integral', label: 'Ecosistema Integral (Dev + Marketing)' },
  { value: 'software', label: 'Desarrollo de Software / Web / App' },
  { value: 'social_video', label: 'Social Media Management & Edición de Video' },
  { value: 'flyers', label: 'Creación de Flyers & Carruseles (Servicio aparte)' }
];

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: '',
    detalles: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef(null);

  // Cerrar el dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsSelectOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectService = (value) => {
    setFormData((prev) => ({ ...prev, servicio: value }));
    setIsSelectOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.servicio) {
      setIsSelectOpen(true);
      return;
    }

    const serviceLabel = serviceOptions.find((opt) => opt.value === formData.servicio)?.label || formData.servicio;
    const detallesText = formData.detalles.trim() ? formData.detalles.trim() : 'Sin detalles adicionales especificados.';

    // Mensaje estructurado sin emojis para máxima compatibilidad con PC y todos los sistemas
    const message = `¡Hola, equipo de N²!\n\n` +
      `Vengo desde la web y me gustaría cotizar una propuesta:\n\n` +
      `- *Nombre:* ${formData.nombre.trim()}\n` +
      `- *Email:* ${formData.email.trim()}\n` +
      `- *Servicio:* ${serviceLabel}\n` +
      `- *Detalles:* ${detallesText}\n\n` +
      `¡Quedo a la espera de su respuesta!`;

    const waUrl = `${contactInfo.whatsappUrl}?text=${encodeURIComponent(message)}`;
    setWhatsappLink(waUrl);
    setIsSubmitted(true);

    // Redirigir a WhatsApp en pestaña nueva
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        servicio: '',
        detalles: ''
      });
      setWhatsappLink('');
    }, 7000);
  };

  const selectedLabel = serviceOptions.find((opt) => opt.value === formData.servicio)?.label;

  return (
    <div className="glass-panel bg-[#1A1A1A]/80 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#3C183C]/35 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      {isSubmitted ? (
        <div className="relative z-10 py-12 sm:py-16 flex flex-col items-center justify-center text-center animate-fade-in">
          <CircleCheck size={56} className="text-[#CDFC8A] mb-4 sm:mb-6 animate-bounce" />
          <h3 className="text-2xl sm:text-3xl font-display text-white mb-2 sm:mb-3">¡Propuesta estructurada!</h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-sm mb-6">
            Hemos generado tu propuesta y te estamos conectando con WhatsApp...
          </p>
          {whatsappLink && (
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#CDFC8A] text-[#022E21] px-6 py-3 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(205,252,138,0.4)] hover:bg-white transition-all cursor-pointer"
            >
              Continuar en WhatsApp <ArrowRight size={16} className="-rotate-45" />
            </a>
          )}
        </div>
      ) : (
        <form className="relative z-10 space-y-6 sm:space-y-10" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
            <div className="flex flex-col gap-2 sm:gap-3">
              <label htmlFor="nombre" className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                Nombre
              </label>
              <input 
                id="nombre"
                name="nombre"
                type="text" 
                required
                value={formData.nombre}
                onChange={handleChange}
                className="input-clean pb-2 sm:pb-3 text-base sm:text-xl focus:border-[#CDFC8A]" 
                placeholder="Tu nombre o el de tu empresa" 
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3">
              <label htmlFor="email" className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                Email
              </label>
              <input 
                id="email"
                name="email"
                type="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="input-clean pb-2 sm:pb-3 text-base sm:text-xl focus:border-[#CDFC8A]" 
                placeholder="contacto@empresa.com" 
              />
            </div>
          </div>

          {/* SELECT PERSONALIZADO CON ESTÉTICA DARK LUXURY */}
          <div className="flex flex-col gap-2 sm:gap-3 relative" ref={selectRef}>
            <label className="text-xs text-gray-500 uppercase tracking-widest font-bold">
              Servicio
            </label>
            
            {/* Gatillo del Select */}
            <button
              type="button"
              onClick={() => setIsSelectOpen(!isSelectOpen)}
              className={`input-clean pb-2 sm:pb-3 text-base sm:text-xl flex items-center justify-between text-left transition-colors cursor-pointer ${
                isSelectOpen ? 'border-b-[#CDFC8A]' : ''
              }`}
            >
              <span className={selectedLabel ? 'text-white' : 'text-gray-400'}>
                {selectedLabel || 'Seleccionar...'}
              </span>
              <ChevronDown 
                size={18} 
                className={`text-gray-400 transition-transform duration-300 sm:w-5 sm:h-5 ${
                  isSelectOpen ? 'rotate-180 text-[#CDFC8A]' : ''
                }`}
              />
            </button>

            {/* Menú Desplegable Personalizado Flotante */}
            {isSelectOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 sm:mt-3 bg-[#141414]/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.8)] z-50 p-2 space-y-1 animate-fade-in">
                {serviceOptions.map((opt) => {
                  const isSelected = formData.servicio === opt.value;
                  return (
                    <div
                      key={opt.value}
                      onClick={() => handleSelectService(opt.value)}
                      className={`px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-between font-medium text-sm sm:text-base md:text-lg ${
                        isSelected 
                          ? 'bg-[#CDFC8A] text-[#022E21] font-bold shadow-md' 
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {isSelected && <Check size={16} className="text-[#022E21] stroke-[3] sm:w-[18px] sm:h-[18px]" />}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-2 sm:gap-3">
            <label htmlFor="detalles" className="text-xs text-gray-500 uppercase tracking-widest font-bold">
              Detalles
            </label>
            <textarea 
              id="detalles"
              name="detalles"
              rows="3" 
              value={formData.detalles}
              onChange={handleChange}
              className="input-clean pb-2 sm:pb-3 text-base sm:text-xl resize-none focus:border-[#CDFC8A]" 
              placeholder="Cuéntanos brevemente tu objetivo y alcance..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#3C183C] text-[#D2CBFE] hover:text-white hover:bg-[#522252] border border-[#D2CBFE]/30 hover:border-[#D2CBFE]/60 py-4 sm:py-6 rounded-2xl transition-all uppercase tracking-widest text-sm sm:text-base flex justify-center items-center gap-2 sm:gap-3 mt-4 sm:mt-6 shadow-[0_0_30px_rgba(60,24,60,0.5)] hover:shadow-[0_0_35px_rgba(210,203,254,0.3)] hover:-translate-y-1 font-bold cursor-pointer"
          >
            Enviar Propuesta <ArrowRight size={18} className="-rotate-45 sm:w-5 sm:h-5" />
          </button>

          <p className="text-center text-xs sm:text-sm text-gray-400 font-normal">
            Canal directo: <a href="mailto:nalcuadradocontacto@gmail.com" className="text-[#CDFC8A] hover:underline font-bold">nalcuadradocontacto@gmail.com</a>
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

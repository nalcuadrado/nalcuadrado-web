import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CircleCheck, ChevronDown, Check } from 'lucide-react';

const serviceOptions = [
  { value: 'dev', label: 'Desarrollo Web / App' },
  { value: 'mkt', label: 'Marketing & Growth' },
  { value: 'both', label: 'Paquete Integral (n²)' }
];

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: '',
    detalles: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        servicio: '',
        detalles: ''
      });
    }, 4000);
  };

  const selectedLabel = serviceOptions.find((opt) => opt.value === formData.servicio)?.label;

  return (
    <div className="glass-panel bg-[#1A1A1A]/80 rounded-[3rem] p-10 md:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#3C183C]/35 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      {isSubmitted ? (
        <div className="relative z-10 py-16 flex flex-col items-center justify-center text-center animate-fade-in">
          <CircleCheck size={64} className="text-[#CDFC8A] mb-6 animate-bounce" />
          <h3 className="text-3xl font-display text-white mb-3">¡mensaje recibido!</h3>
          <p className="text-gray-300 text-base max-w-sm">
            Gracias por contactarnos. Nos pondremos en contacto contigo en menos de 24 horas.
          </p>
        </div>
      ) : (
        <form className="relative z-10 space-y-10" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-3">
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
                className="input-clean pb-3 text-xl focus:border-[#CDFC8A]" 
                placeholder="John Doe" 
              />
            </div>
            <div className="flex flex-col gap-3">
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
                className="input-clean pb-3 text-xl focus:border-[#CDFC8A]" 
                placeholder="john@empresa.com" 
              />
            </div>
          </div>

          {/* SELECT PERSONALIZADO CON ESTÉTICA DARK LUXURY */}
          <div className="flex flex-col gap-3 relative" ref={selectRef}>
            <label className="text-xs text-gray-500 uppercase tracking-widest font-bold">
              Servicio
            </label>
            
            {/* Gatillo del Select */}
            <button
              type="button"
              onClick={() => setIsSelectOpen(!isSelectOpen)}
              className={`input-clean pb-3 text-xl flex items-center justify-between text-left transition-colors cursor-pointer ${
                isSelectOpen ? 'border-b-[#CDFC8A]' : ''
              }`}
            >
              <span className={selectedLabel ? 'text-white' : 'text-gray-400'}>
                {selectedLabel || 'Seleccionar...'}
              </span>
              <ChevronDown 
                size={20} 
                className={`text-gray-400 transition-transform duration-300 ${
                  isSelectOpen ? 'rotate-180 text-[#CDFC8A]' : ''
                }`}
              />
            </button>

            {/* Menú Desplegable Personalizado Flotante */}
            {isSelectOpen && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-[#141414]/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.8)] z-50 p-2 space-y-1 animate-fade-in">
                {serviceOptions.map((opt) => {
                  const isSelected = formData.servicio === opt.value;
                  return (
                    <div
                      key={opt.value}
                      onClick={() => handleSelectService(opt.value)}
                      className={`px-5 py-3.5 rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-between font-medium text-base md:text-lg ${
                        isSelected 
                          ? 'bg-[#CDFC8A] text-[#022E21] font-bold shadow-md' 
                          : 'text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {isSelected && <Check size={18} className="text-[#022E21] stroke-[3]" />}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-3">
            <label htmlFor="detalles" className="text-xs text-gray-500 uppercase tracking-widest font-bold">
              Detalles
            </label>
            <textarea 
              id="detalles"
              name="detalles"
              rows="3" 
              value={formData.detalles}
              onChange={handleChange}
              className="input-clean pb-3 text-xl resize-none focus:border-[#CDFC8A]" 
              placeholder="Cuéntanos brevemente tu objetivo..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#3C183C] text-[#D2CBFE] hover:text-white hover:bg-[#522252] border border-[#D2CBFE]/30 hover:border-[#D2CBFE]/60 py-6 rounded-2xl transition-all uppercase tracking-widest flex justify-center items-center gap-3 mt-6 shadow-[0_0_30px_rgba(60,24,60,0.5)] hover:shadow-[0_0_35px_rgba(210,203,254,0.3)] hover:-translate-y-1 font-bold cursor-pointer"
          >
            Enviar Propuesta <ArrowRight size={20} className="-rotate-45" />
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

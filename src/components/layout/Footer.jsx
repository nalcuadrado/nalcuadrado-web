import React from 'react';
import { Instagram, Linkedin, Twitter } from '../common/SocialIcons';
import { footerLinks } from '../../data/navigationData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: <Instagram size={24} />, link: '#', label: 'Instagram' },
    { icon: <Linkedin size={24} />, link: '#', label: 'LinkedIn' },
    { icon: <Twitter size={24} />, link: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#CDFC8A] to-[#b8eb70] text-[#022E21] pt-14 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 md:px-12 rounded-t-[2.5rem] sm:rounded-t-[3rem] md:rounded-t-[5rem] relative z-10 shadow-[0_-20px_60px_rgba(205,252,138,0.2)] mt-8 sm:mt-10">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-20">
          
          {/* Columna Marca - Logo Oficial n² sin fondo y más grande */}
          <div className="col-span-1 sm:col-span-2">
            <div className="mb-4 sm:mb-6">
              <img 
                src="/logo1.svg" 
                alt="Logo n²" 
                className="h-16 sm:h-20 md:h-24 w-auto object-contain" 
              />
            </div>
            <p className="text-[#022E21]/80 text-sm sm:text-base max-w-md font-medium leading-relaxed">
              Agencia digital boutique especializada en desarrollo de software de alto rendimiento y marketing de resultados.
            </p>
          </div>
          
          {/* Columna Empresa */}
          <div>
            <h4 className="text-[#022E21] uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6 font-bold">Empresa</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base font-bold text-[#022E21]/75 uppercase">
              {footerLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-[#3C183C] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Redes */}
          <div>
            <h4 className="text-[#022E21] uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6 font-bold">Redes</h4>
            <div className="flex gap-3 sm:gap-4">
              {socialIcons.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  aria-label={social.label}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#022E21]/8 border border-[#022E21]/15 flex items-center justify-center text-[#022E21] hover:bg-[#3C183C] hover:text-[#D2CBFE] transition-all hover:-translate-y-1 cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior de copyright y políticas */}
        <div className="border-t border-[#022E21]/15 pt-8 sm:pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
          <div className="text-xs font-bold text-[#022E21]/70 uppercase tracking-widest">
            © {currentYear} n cuadrado. todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-xs font-bold text-[#022E21]/70 uppercase tracking-widest">
            <a href="#" className="hover:text-[#3C183C] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#3C183C] transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

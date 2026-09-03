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
    <footer className="bg-gradient-to-b from-[#CDFC8A] to-[#b8eb70] text-[#022E21] pt-20 pb-10 px-6 md:px-12 rounded-t-[3rem] md:rounded-t-[5rem] relative z-10 shadow-[0_-20px_60px_rgba(205,252,138,0.2)] mt-10">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Columna Marca */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-6xl font-display text-[#022E21] flex items-end tracking-tighter mb-6">
              n<span className="text-[#3C183C] mb-2 ml-1 text-3xl">2</span>
            </div>
            <p className="text-[#022E21]/80 text-base max-w-md font-medium leading-relaxed">
              Agencia digital boutique especializada en desarrollo de software de alto rendimiento y marketing de resultados.
            </p>
          </div>
          
          {/* Columna Empresa */}
          <div>
            <h4 className="text-[#022E21] uppercase tracking-widest text-sm mb-6 font-bold">Empresa</h4>
            <ul className="space-y-4 text-base font-bold text-[#022E21]/75 uppercase">
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
            <h4 className="text-[#022E21] uppercase tracking-widest text-sm mb-6 font-bold">Redes</h4>
            <div className="flex gap-4">
              {socialIcons.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-[#022E21]/8 border border-[#022E21]/15 flex items-center justify-center text-[#022E21] hover:bg-[#3C183C] hover:text-[#D2CBFE] transition-all hover:-translate-y-1 cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior de copyright y políticas */}
        <div className="border-t border-[#022E21]/15 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
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

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Linkedin, Instagram, Github, Twitter } from '../../common/SocialIcons';

export const FlipCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isGreen = member.accentColor === '#CDFC8A';

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group aspect-[3/4] w-full max-w-[420px] sm:max-w-[450px] perspective-1000 cursor-pointer select-none"
    >
      <div className={`flip-inner relative w-full h-full transition-transform duration-700 transform-style-3d shadow-2xl rounded-[2.5rem] sm:rounded-[3rem] ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Lado Frontal: Foto integrada a color y badge en la parte inferior */}
        <div 
          className={`flip-front absolute inset-0 backface-hidden rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden bg-[#1A1A1A] border ${
            isFlipped 
              ? 'pointer-events-none z-0' 
              : 'pointer-events-auto z-10'
          }`}
          style={{ 
            borderColor: `${member.accentColor}45`,
            boxShadow: `0 0 35px ${member.glowColor}` 
          }}
        >
          <img 
            src={member.image} 
            alt={member.name} 
            className="absolute inset-0 w-full h-full object-cover object-top opacity-95 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/25 to-transparent pointer-events-none"></div>
          
          {/* Nombre y cargo situados en la parte inferior */}
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end items-center text-center pb-6 sm:pb-8 pointer-events-none">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white mb-2 sm:mb-2.5 drop-shadow-xl font-bold tracking-tight">
              {member.name}
            </h3>
            <div className="bg-black/40 text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs uppercase tracking-widest border border-white/15 backdrop-blur-md shadow-lg font-bold">
              {member.role}
            </div>
          </div>
          
          <div 
            className="absolute top-5 right-5 sm:top-6 sm:right-6 md:top-7 md:right-7 p-2.5 sm:p-3 rounded-full z-10 shadow-lg transition-transform duration-300 group-hover:scale-110 pointer-events-none"
            style={{ 
              backgroundColor: member.accentColor,
              boxShadow: `0 0 20px ${member.shadowGlow}`
            }}
          >
            <ArrowRight className={`${isGreen ? 'text-[#022E21]' : 'text-white'} -rotate-45`} size={18} />
          </div>
        </div>

        {/* Lado Posterior: Información detallada (Flip 180) */}
        <div 
          className={`flip-back absolute inset-0 backface-hidden rotate-y-180 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-10 flex flex-col justify-center border ${
            isFlipped 
              ? 'pointer-events-auto z-20' 
              : 'pointer-events-none z-0'
          }`}
          style={{
            background: `linear-gradient(to bottom right, ${member.accentColor}, ${member.accentColorDark})`,
            borderColor: `${member.accentColor}80`,
            boxShadow: `0 0 40px ${member.shadowGlow}`
          }}
        >
          <h4 className={`text-xl sm:text-2xl md:text-3xl ${isGreen ? 'text-[#022E21]' : 'text-white'} mb-3 sm:mb-4 font-display font-bold`}>
            {member.title}
          </h4>
          
          <p className={`${isGreen ? 'text-[#022E21]/90' : 'text-purple-100'} text-sm md:text-base leading-relaxed mb-6 font-medium`}>
            {member.bio}
          </p>

          <ul className={`space-y-2.5 text-xs md:text-sm ${isGreen ? 'text-[#022E21]' : 'text-white'} mb-6 uppercase tracking-widest font-bold`}>
            {member.skills.map((skill, index) => (
              <li key={index} className="flex items-center gap-3">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: member.bulletColor,
                    boxShadow: `0 0 8px ${member.bulletColor}`
                  }}
                ></div>
                {skill}
              </li>
            ))}
          </ul>

          <div className="relative z-30 flex gap-3 pointer-events-auto mt-2">
            {member.socials.linkedin && (
              <a 
                href={member.socials.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                onMouseDown={handleLinkClick}
                onTouchStart={handleLinkClick}
                aria-label="LinkedIn"
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-md ${
                  isGreen 
                    ? 'bg-[#022E21]/15 text-[#022E21] hover:bg-[#022E21] hover:text-[#CDFC8A] border border-[#022E21]/20' 
                    : 'bg-white/10 text-white hover:bg-white hover:text-[#3C183C] border border-white/20'
                }`}
              >
                <Linkedin size={20} className="pointer-events-none" />
              </a>
            )}
            {member.socials.instagram && (
              <a 
                href={member.socials.instagram} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                onMouseDown={handleLinkClick}
                onTouchStart={handleLinkClick}
                aria-label="Instagram"
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-md ${
                  isGreen 
                    ? 'bg-[#022E21]/15 text-[#022E21] hover:bg-[#022E21] hover:text-[#CDFC8A] border border-[#022E21]/20' 
                    : 'bg-white/10 text-white hover:bg-white hover:text-[#3C183C] border border-white/20'
                }`}
              >
                <Instagram size={20} className="pointer-events-none" />
              </a>
            )}
            {member.socials.github && (
              <a 
                href={member.socials.github} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                onMouseDown={handleLinkClick}
                onTouchStart={handleLinkClick}
                aria-label="GitHub"
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-md ${
                  isGreen 
                    ? 'bg-[#022E21]/15 text-[#022E21] hover:bg-[#022E21] hover:text-[#CDFC8A] border border-[#022E21]/20' 
                    : 'bg-white/10 text-white hover:bg-white hover:text-[#3C183C] border border-white/20'
                }`}
              >
                <Github size={20} className="pointer-events-none" />
              </a>
            )}
            {member.socials.twitter && (
              <a 
                href={member.socials.twitter} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                onMouseDown={handleLinkClick}
                onTouchStart={handleLinkClick}
                aria-label="Twitter"
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer shadow-md ${
                  isGreen 
                    ? 'bg-[#022E21]/15 text-[#022E21] hover:bg-[#022E21] hover:text-[#CDFC8A] border border-[#022E21]/20' 
                    : 'bg-white/10 text-white hover:bg-white hover:text-[#3C183C] border border-white/20'
                }`}
              >
                <Twitter size={20} className="pointer-events-none" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;

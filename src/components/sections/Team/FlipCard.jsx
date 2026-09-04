import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Linkedin, Github, Twitter } from '../../common/SocialIcons';

export const FlipCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isAlicia = member.id === 'alicia';

  return (
    <div 
      onClick={() => setIsFlipped(!isFlipped)}
      className="group h-[380px] sm:h-[420px] md:h-[450px] w-full perspective-1000 cursor-pointer select-none"
    >
      <div className={`flip-inner relative w-full h-full transition-transform duration-700 transform-style-3d shadow-2xl rounded-[2.5rem] sm:rounded-[3rem] ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Lado Frontal: Foto integrada y badge en la parte inferior baja */}
        <div 
          className="absolute inset-0 backface-hidden rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden bg-[#1A1A1A] border border-white/10"
          style={{ boxShadow: `0 0 30px ${member.glowColor}` }}
        >
          <img 
            src={member.image} 
            alt={member.name} 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent"></div>
          
          {/* Nombre y cargo situados en la parte inferior baja */}
          <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end items-center text-center z-10 pb-6 sm:pb-8 md:pb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white mb-2 sm:mb-2.5 drop-shadow-xl font-bold tracking-tight">
              {member.name}
            </h3>
            <div className="bg-white/15 text-white px-4 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs uppercase tracking-widest border border-white/10 backdrop-blur-md shadow-lg font-bold">
              {member.role}
            </div>
          </div>
          
          <div 
            className="absolute top-5 right-5 sm:top-6 sm:right-6 md:top-8 md:right-8 p-2.5 sm:p-3 rounded-full z-10 shadow-lg"
            style={{ 
              backgroundColor: member.accentColor,
              boxShadow: `0 0 20px ${member.shadowGlow}`
            }}
          >
            <ArrowRight className={`${isAlicia ? 'text-white' : 'text-[#022E21]'} -rotate-45`} size={18} />
          </div>
        </div>

        {/* Lado Posterior: Información detallada (Flip 180) */}
        <div 
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-10 flex flex-col justify-center border"
          style={{
            background: `linear-gradient(to bottom right, ${member.accentColor}, ${member.accentColorDark})`,
            borderColor: `${member.accentColor}80`,
            boxShadow: `0 0 40px ${member.shadowGlow}`
          }}
        >
          <h4 className={`text-xl sm:text-2xl md:text-3xl ${isAlicia ? 'text-white' : 'text-[#022E21]'} mb-3 sm:mb-4 font-display font-bold`}>
            {member.title}
          </h4>
          
          <p className={`${isAlicia ? 'text-purple-100' : 'text-[#022E21]/90'} text-sm md:text-base leading-relaxed mb-6 font-medium`}>
            {member.bio}
          </p>

          <ul className={`space-y-2.5 text-xs md:text-sm ${isAlicia ? 'text-white' : 'text-[#022E21]'} mb-6 uppercase tracking-widest font-bold`}>
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

          <div className="flex gap-4">
            {member.socials.linkedin && (
              <a 
                href={member.socials.linkedin} 
                aria-label="LinkedIn"
                className={`${isAlicia ? 'text-white hover:text-[#CDFC8A]' : 'text-[#022E21] hover:text-[#3C183C]'} transition-colors cursor-pointer`}
              >
                <Linkedin size={22} />
              </a>
            )}
            {member.socials.github && (
              <a 
                href={member.socials.github} 
                aria-label="GitHub"
                className={`${isAlicia ? 'text-white hover:text-[#CDFC8A]' : 'text-[#022E21] hover:text-[#3C183C]'} transition-colors cursor-pointer`}
              >
                <Github size={22} />
              </a>
            )}
            {member.socials.twitter && (
              <a 
                href={member.socials.twitter} 
                aria-label="Twitter"
                className={`${isAlicia ? 'text-white hover:text-[#CDFC8A]' : 'text-[#022E21] hover:text-[#3C183C]'} transition-colors cursor-pointer`}
              >
                <Twitter size={22} />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;

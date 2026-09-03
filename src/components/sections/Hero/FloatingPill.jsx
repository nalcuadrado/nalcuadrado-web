import React from 'react';
import { Code, Megaphone } from 'lucide-react';

export const FloatingPill = ({ mousePos }) => {
  return (
    <div 
      className="glass-panel bg-[#121212]/80 rounded-full border border-white/20 p-4 flex flex-row items-center gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out"
      style={{ 
        transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 30px) rotateY(10deg)` 
      }}
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#CDFC8A] flex items-center justify-center text-[#022E21] shadow-lg">
          <Code size={24}/>
        </div>
        <span className="text-sm font-bold uppercase tracking-widest text-gray-200">Dev</span>
      </div>
      
      <div className="w-[2px] h-10 bg-white/20"></div>
      
      <div className="flex items-center gap-4 pr-4">
        <div className="w-14 h-14 rounded-full bg-[#3C183C] border border-[#D2CBFE]/30 flex items-center justify-center text-[#D2CBFE] shadow-lg">
          <Megaphone size={24}/>
        </div>
        <span className="text-sm font-bold uppercase tracking-widest text-gray-200">Mkt</span>
      </div>
    </div>
  );
};

export default FloatingPill;

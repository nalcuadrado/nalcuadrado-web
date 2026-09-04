import React from 'react';

export const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-[#121212]/95 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/10 hover:bg-[#181818] transition-colors hover:border-[#CDFC8A]/50 group cursor-default shadow-lg">
      <div className="text-[#CDFC8A] mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-white mb-2 sm:mb-3 text-lg sm:text-xl font-display font-bold">{title}</h4>
      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

export default FeatureCard;

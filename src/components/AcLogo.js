
import React from 'react';

const AcLogo = ({ 
  size = 'medium', 
  color = 'purple', 
  className = '' 
}) => {
  const sizeClasses = {
    xl: 'text-8xl'
  };

  const colorClasses = {
    purple: 'text-purple-400'
  };

  return (
    <span className={`
      ${sizeClasses[size]} 
      ${colorClasses[color]} 
      ${className}
      font-bold 
      select-none
      transition-all duration-300 
      hover:scale-105
      cursor-pointer
      inline-block
    `}>
      Ac.
    </span>
  );
};

export default AcLogo;
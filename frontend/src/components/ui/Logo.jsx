import React from 'react';
import logoImage from '../../assets/logo/logo.png';

/**
 * Feedify-AI Logo Component
 * Uses the actual logo image from assets
 */

export function Logo(){ 
  return (
    <div className={`flex items-center`}>
      <img 
        src={logoImage} 
        alt="Feedify-AI Logo" 
        className={`h-8 w-auto object-contain`}
      />
    </div>
  );
}

export default Logo;

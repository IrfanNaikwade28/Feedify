import React from 'react';

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  disabled = false,
  icon = null,
  className = ''
}) {
  const baseStyles = 'font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#4F8CFF] to-[#6A5CFF] text-white shadow-soft-lg hover:shadow-soft-xl hover:from-[#3D7AEB] hover:to-[#5B4AE5] active:scale-[0.98]',
    secondary: 'bg-white text-[#4F8CFF] border-2 border-gray-300/50 hover:bg-gray-50 hover:border-[#4F8CFF]/30 active:scale-[0.98] shadow-soft',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100/50 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-xl h-10',
    md: 'px-6 py-3 text-base rounded-2xl h-12',
    lg: 'px-8 py-4 text-lg rounded-3xl h-14',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {children}
    </button>
  );
}

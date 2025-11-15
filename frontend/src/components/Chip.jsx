import React from 'react';

export default function Chip({ 
  children, 
  variant = 'default', 
  size = 'md',
  onClick = null,
  onRemove = null,
  className = ''
}) {
  const baseStyles = 'inline-flex items-center gap-1.5 font-medium transition-all duration-300';
  
  const variants = {
    default: 'bg-gray-100/70 text-gray-600 border border-gray-200/50',
    primary: 'bg-gradient-to-r from-[#4F8CFF]/10 to-[#6A5CFF]/10 text-[#4F8CFF] border border-[#4F8CFF]/20',
    green: 'bg-success/10 text-success border border-success/20',
    yellow: 'bg-warning/10 text-warning border border-warning/20',
    purple: 'bg-info/10 text-info border border-info/20',
    red: 'bg-error/10 text-error border border-error/20',
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs rounded-full',
    md: 'px-3 py-1.5 text-sm rounded-full',
    lg: 'px-4 py-2 text-base rounded-full',
  };

  const clickableStyles = onClick ? 'cursor-pointer hover:scale-105 active:scale-95' : '';

  return (
    <span
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${clickableStyles}
        ${className}
      `}
    >
      {children}
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1 hover:bg-black/10 rounded-full p-0.5 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </span>
  );
}

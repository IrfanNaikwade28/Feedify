import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Badge/Chip component for status indicators and tags
 * Modern, pill-shaped with multiple variants
 */

export function Badge({ 
  children, 
  variant = "default",
  size = "md",
  className = "",
  icon = null,
  onRemove = null,
}) {
  const variants = {
    default: "bg-gray-100/70 text-gray-600 border-gray-200/50",
    primary: "bg-gradient-to-r from-[#4F8CFF]/10 to-[#6A5CFF]/10 text-[#4F8CFF] border-[#4F8CFF]/20",
    success: "bg-green-50/70 text-green-600 border-green-200/50",
    warning: "bg-amber-50/70 text-amber-600 border-amber-200/50",
    error: "bg-red-50/70 text-red-600 border-red-200/50",
    info: "bg-purple-50/70 text-purple-600 border-purple-200/50",
    available: "bg-gradient-to-r from-[#4F8CFF]/10 to-[#6A5CFF]/10 text-[#4F8CFF] border-[#4F8CFF]/20",
    pending: "bg-amber-50/70 text-amber-600 border-amber-200/50",
    completed: "bg-green-50/70 text-green-600 border-green-200/50",
    closed: "bg-gray-100/70 text-gray-500 border-gray-200/50",
  };

  const sizes = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium border rounded-full transition-all",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {icon && <span className="text-current">{icon}</span>}
      {children}
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1 hover:bg-black/10 rounded-full p-0.5 transition-colors"
          aria-label="Remove"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </span>
  );
}

export default Badge;

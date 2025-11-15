import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Avatar component for user profile images
 * Shows initials fallback if no image provided
 */

export function Avatar({ 
  src = null,
  alt = "",
  name = "",
  size = "md",
  className = "",
}) {
  const sizes = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
    xl: "w-16 h-16 text-xl",
    "2xl": "w-20 h-20 text-2xl",
  };

  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  return (
    <div
      className={cn(
        "rounded-full overflow-hidden flex items-center justify-center font-semibold shrink-0",
        "bg-gradient-to-br from-primary-500 to-primary-700 text-white",
        sizes[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={alt || name} className="w-full h-full object-cover" />
      ) : (
        <span>{getInitials(name || alt)}</span>
      )}
    </div>
  );
}

export default Avatar;

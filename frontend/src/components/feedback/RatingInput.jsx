import React, { useState } from 'react';
import { Star, Smile, Meh, Frown } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Rating Input Component
 * Supports stars (1-5) and emoji reactions
 */

export function RatingInput({ 
  value = 0,
  onChange,
  max = 5,
  type = "stars", // "stars" | "emoji"
  size = "md",
  label = "",
  required = false,
  className = "",
}) {
  const [hover, setHover] = useState(0);

  const sizes = {
    sm: { icon: 20, gap: "gap-1" },
    md: { icon: 28, gap: "gap-2" },
    lg: { icon: 36, gap: "gap-3" },
  };

  const s = sizes[size];

  const emojiSets = [
    { icon: Frown, color: "text-red-500", label: "Poor" },
    { icon: Frown, color: "text-orange-500", label: "Below Average" },
    { icon: Meh, color: "text-yellow-500", label: "Average" },
    { icon: Smile, color: "text-green-500", label: "Good" },
    { icon: Smile, color: "text-emerald-500", label: "Excellent" },
  ];

  const handleClick = (rating) => {
    onChange?.(rating);
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      
      <div className={cn("flex items-center", s.gap)}>
        {type === "stars" ? (
          // Star Rating
          Array.from({ length: max }).map((_, index) => {
            const rating = index + 1;
            const isFilled = rating <= (hover || value);
            
            return (
              <button
                key={rating}
                type="button"
                onClick={() => handleClick(rating)}
                onMouseEnter={() => setHover(rating)}
                onMouseLeave={() => setHover(0)}
                className="transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
                aria-label={`Rate ${rating} out of ${max}`}
              >
                <Star
                  size={s.icon}
                  className={cn(
                    "transition-colors",
                    isFilled 
                      ? "fill-yellow-400 text-yellow-400" 
                      : "text-gray-300"
                  )}
                />
              </button>
            );
          })
        ) : (
          // Emoji Rating
          emojiSets.map((emoji, index) => {
            const rating = index + 1;
            const isSelected = rating === value;
            const isHovered = rating === hover;
            const Icon = emoji.icon;
            
            return (
              <button
                key={rating}
                type="button"
                onClick={() => handleClick(rating)}
                onMouseEnter={() => setHover(rating)}
                onMouseLeave={() => setHover(0)}
                className={cn(
                  "transition-all duration-200 focus:outline-none rounded-full p-2",
                  "hover:bg-gray-100 active:scale-95",
                  isSelected && "bg-gray-100 ring-2 ring-primary-500 ring-offset-2"
                )}
                aria-label={emoji.label}
                title={emoji.label}
              >
                <Icon
                  size={s.icon}
                  className={cn(
                    "transition-all",
                    isSelected || isHovered ? emoji.color : "text-gray-400"
                  )}
                  strokeWidth={isSelected ? 2.5 : 2}
                />
              </button>
            );
          })
        )}
      </div>
      
      {value > 0 && type === "emoji" && (
        <p className="text-xs text-gray-500 animate-fade-in">
          {emojiSets[value - 1].label}
        </p>
      )}
    </div>
  );
}

export default RatingInput;

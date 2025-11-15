/**
 * Utility function to merge Tailwind classes
 * Simple replacement for clsx + tailwind-merge
 */

export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Modern card component following shadcn/ui patterns
 * Used for content containers with soft shadows
 */

export function Card({ 
  children, 
  className = "", 
  onClick,
  hoverable = false,
  padding = "default",
}) {
  const paddingClasses = {
    none: "",
    sm: "p-3",
    default: "p-4",
    lg: "p-6",
    xl: "p-8",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-white rounded-3xl border border-gray-300/30 shadow-card transition-all duration-300",
        hoverable && "hover:shadow-card-hover cursor-pointer active:scale-[0.98]",
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={cn("space-y-1.5 pb-4", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={cn("text-lg font-semibold leading-none tracking-tight text-gray-900", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = "" }) {
  return (
    <p className={cn("text-sm text-gray-500", className)}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={cn("flex items-center pt-4", className)}>
      {children}
    </div>
  );
}

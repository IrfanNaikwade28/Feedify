import React from 'react';
import { cn } from '../../utils/cn';
import RatingInput from './RatingInput';

/**
 * Universal Form Field Component
 * Handles all feedback field types: text, textarea, rating, select, toggle
 */

export function FormField({
  type = "text",
  label,
  value,
  onChange,
  placeholder = "",
  required = false,
  options = [], // For select/radio
  maxLength = null,
  rows = 4,
  error = null,
  helpText = null,
  className = "",
  ...props
}) {
  const inputBaseClass = cn(
    "w-full px-4 py-3 rounded-xl border-2 transition-all",
    "focus:outline-none focus:ring-2 focus:ring-primary-500/20",
    error
      ? "border-error focus:border-error"
      : "border-gray-300 focus:border-primary-500",
    "placeholder:text-gray-400 text-gray-800"
  );

  const renderField = () => {
    switch (type) {
      case "text":
      case "email":
      case "number":
        return (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            maxLength={maxLength}
            className={inputBaseClass}
            {...props}
          />
        );

      case "textarea":
        return (
          <div className="relative">
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              required={required}
              maxLength={maxLength}
              rows={rows}
              className={cn(inputBaseClass, "resize-none")}
              {...props}
            />
            {maxLength && (
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                {value?.length || 0}/{maxLength}
              </div>
            )}
          </div>
        );

      case "rating":
        return (
          <RatingInput
            value={value}
            onChange={onChange}
            type={props.ratingType || "stars"}
            size={props.ratingSize || "md"}
          />
        );

      case "select":
        return (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className={cn(inputBaseClass, "cursor-pointer appearance-none bg-white")}
            {...props}
          >
            <option value="" disabled>
              {placeholder || "Select an option..."}
            </option>
            {options.map((option, index) => (
              <option key={index} value={option.value || option}>
                {option.label || option}
              </option>
            ))}
          </select>
        );

      case "toggle":
        return (
          <button
            type="button"
            onClick={() => onChange(!value)}
            className={cn(
              "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
              value ? "bg-primary-500" : "bg-gray-300"
            )}
            {...props}
          >
            <span
              className={cn(
                "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                value ? "translate-x-6" : "translate-x-1"
              )}
            />
          </button>
        );

      case "radio":
        return (
          <div className="space-y-2">
            {options.map((option, index) => (
              <label
                key={index}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name={label}
                  value={option.value || option}
                  checked={value === (option.value || option)}
                  onChange={(e) => onChange(e.target.value)}
                  className="w-4 h-4 text-primary-500 focus:ring-2 focus:ring-primary-500"
                  {...props}
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  {option.label || option}
                </span>
              </label>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      
      {renderField()}
      
      {helpText && !error && (
        <p className="text-xs text-gray-500">{helpText}</p>
      )}
      
      {error && (
        <p className="text-xs text-error flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M7 4V7.5M7 10H7.005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;

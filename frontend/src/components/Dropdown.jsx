import React from 'react';

export default function Dropdown({ 
  label, 
  placeholder = 'Select an option', 
  value, 
  onChange, 
  options = [],
  error = null,
  disabled = false,
  className = ''
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full px-4 py-3 rounded-2xl bg-white border border-gray-200/60
            text-gray-900 appearance-none cursor-pointer
            focus:outline-none focus:border-[#4F8CFF]/50 focus:ring-4 focus:ring-[#4F8CFF]/10
            transition-all duration-300 shadow-soft
            disabled:bg-gray-50 disabled:cursor-not-allowed
            ${error ? 'border-red-400/60 focus:border-red-400 focus:ring-red-400/10' : ''}
            ${!value ? 'text-gray-400' : ''}
          `}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value} className="text-gray-900">
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

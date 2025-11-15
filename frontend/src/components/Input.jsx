import React from 'react';

export default function Input({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  icon = null,
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
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full px-4 py-3 rounded-2xl bg-white border border-gray-200/60
            text-gray-900 placeholder-gray-400
            focus:outline-none focus:border-[#4F8CFF]/50 focus:ring-4 focus:ring-[#4F8CFF]/10
            transition-all duration-300 shadow-soft
            disabled:bg-gray-50 disabled:cursor-not-allowed
            ${icon ? 'pl-12' : ''}
            ${error ? 'border-red-400/60 focus:border-red-400 focus:ring-red-400/10' : ''}
          `}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

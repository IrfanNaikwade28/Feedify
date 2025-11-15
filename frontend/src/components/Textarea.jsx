import React from 'react';

export default function Textarea({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  rows = 4,
  error = null,
  disabled = false,
  maxLength = null,
  className = ''
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        maxLength={maxLength}
        className={`
          w-full px-4 py-3 rounded-2xl bg-white border border-gray-200/60
          text-gray-900 placeholder-gray-400
          focus:outline-none focus:border-[#4F8CFF]/50 focus:ring-4 focus:ring-[#4F8CFF]/10
          transition-all duration-300 resize-none shadow-soft
          disabled:bg-gray-50 disabled:cursor-not-allowed
          ${error ? 'border-red-400/60 focus:border-red-400 focus:ring-red-400/10' : ''}
        `}
      />
      <div className="flex justify-between items-center mt-1.5">
        {error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : (
          <div></div>
        )}
        {maxLength && (
          <p className="text-xs text-gray-400">
            {value?.length || 0}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
}

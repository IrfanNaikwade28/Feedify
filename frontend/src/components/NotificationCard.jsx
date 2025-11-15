import React from 'react';

export default function NotificationCard({ 
  title, 
  description, 
  timestamp, 
  isUnread = false,
  onClick 
}) {
  const formatTimestamp = (time) => {
    // Simple time formatter - can be enhanced with a library like date-fns
    const date = new Date(time);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-3xl p-5 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer border border-gray-200/50 active:scale-[0.98]"
    >
      <div className="flex items-start gap-3">
        {isUnread && (
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#6A5CFF] mt-1.5 flex-shrink-0 animate-pulse"></div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900 mb-1.5 leading-snug">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-2 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gray-400">
              <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 3.5V7L9.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs text-gray-400">{formatTimestamp(timestamp)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

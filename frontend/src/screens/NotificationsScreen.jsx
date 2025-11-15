import React, { useState } from 'react';
import NotificationCard from '../components/NotificationCard';

export default function NotificationsScreen() {
  // Mock data - replace with actual API calls
  const [notifications] = useState([
    {
      id: 1,
      title: 'Feedback Submitted Successfully',
      description: 'Your feedback for Web Development has been received. Thank you for sharing your thoughts!',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
      isUnread: true,
    },
    {
      id: 2,
      title: 'New Feedback Form Available',
      description: 'A new feedback form for Database Systems is now available. Share your experience!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
      isUnread: true,
    },
    {
      id: 3,
      title: 'Feedback Period Closing Soon',
      description: 'The feedback period for Data Structures & Algorithms ends in 2 days. Submit your feedback before it\'s too late!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      isUnread: false,
    },
    {
      id: 4,
      title: 'Thank You for Your Contribution',
      description: 'Your feedback has helped improve the Mobile App Development course. We appreciate your input!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      isUnread: false,
    },
    {
      id: 5,
      title: 'System Update',
      description: 'The Feedify system has been updated with new features. Check out the improved interface!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
      isUnread: false,
    },
  ]);

  const unreadCount = notifications.filter(n => n.isUnread).length;

  const handleNotificationClick = (notificationId) => {
    console.log('Notification clicked:', notificationId);
    // Handle notification click - mark as read, navigate, etc.
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#4F8CFF] to-[#6A5CFF] px-5 pt-12 pb-8 rounded-b-[32px] shadow-soft-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">
              Notifications
            </h1>
            <p className="text-sm text-white/80">
              Stay updated with latest news
            </p>
          </div>
          {unreadCount > 0 && (
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              <span className="text-sm font-semibold text-white">
                {unreadCount} new
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 py-6 overflow-y-auto pb-24">
        {notifications.length > 0 ? (
          <div className="space-y-3">
            {/* Unread Section */}
            {unreadCount > 0 && (
              <>
                <h2 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4F8CFF] to-[#6A5CFF]"></div>
                  Unread
                </h2>
                {notifications
                  .filter(n => n.isUnread)
                  .map((notification) => (
                    <NotificationCard
                      key={notification.id}
                      title={notification.title}
                      description={notification.description}
                      timestamp={notification.timestamp}
                      isUnread={notification.isUnread}
                      onClick={() => handleNotificationClick(notification.id)}
                    />
                  ))}
              </>
            )}

            {/* Earlier Section */}
            {notifications.filter(n => !n.isUnread).length > 0 && (
              <>
                <h2 className="text-sm font-semibold text-gray-600 mt-6 mb-3">
                  Earlier
                </h2>
                {notifications
                  .filter(n => !n.isUnread)
                  .map((notification) => (
                    <NotificationCard
                      key={notification.id}
                      title={notification.title}
                      description={notification.description}
                      timestamp={notification.timestamp}
                      isUnread={notification.isUnread}
                      onClick={() => handleNotificationClick(notification.id)}
                    />
                  ))}
              </>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4 shadow-soft">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">No Notifications</h3>
            <p className="text-sm text-gray-400 text-center">
              You're all caught up! Check back later for updates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import Button from '../components/Button';

export default function ProfileScreen() {
  // Mock user data - replace with actual user data from context/state
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    studentId: 'STU-2024-12345',
    year: '3rd Year',
    major: 'Computer Science',
    avatar: null, // Can be image URL
  };

  const settingsItems = [
    {
      id: 'feedback',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8.33333 2.5H2.5V8.33333H8.33333V2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 2.5H11.6667V8.33333H17.5V2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 11.6667H11.6667V17.5H17.5V11.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.33333 11.6667H2.5V17.5H8.33333V11.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'My Feedback',
      description: 'View your submitted feedback',
      color: 'text-[#4F8CFF]',
      bgColor: 'bg-[#4F8CFF]/10',
    },
    {
      id: 'notifications',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M15 6.66667C15 5.34058 14.4732 4.06881 13.5355 3.13113C12.5979 2.19345 11.3261 1.66667 10 1.66667C8.67392 1.66667 7.40215 2.19345 6.46447 3.13113C5.52678 4.06881 5 5.34058 5 6.66667C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5788 18.2537 10.292 18.3304 10 18.3304C9.70802 18.3304 9.42116 18.2537 9.16814 18.1079C8.91513 17.9622 8.70484 17.7526 8.55835 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Notification Settings',
      description: 'Manage your notifications',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
    },
    {
      id: 'settings',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.6667 10C16.6667 10.4417 16.625 10.875 16.55 11.2917L18.3333 12.6667L16.6667 15.8333L14.5833 15C14.1 15.5 13.5417 15.9167 12.9167 16.2333L12.5 18.3333H9.16667L8.75 16.2333C8.125 15.9167 7.56667 15.5 7.08333 15L4.99167 15.8333L3.33333 12.6667L5.11667 11.2917C5.04167 10.875 5 10.4417 5 10C5 9.55833 5.04167 9.125 5.11667 8.70833L3.33333 7.33333L4.99167 4.16667L7.08333 5C7.56667 4.5 8.125 4.08333 8.75 3.76667L9.16667 1.66667H12.5L12.9167 3.76667C13.5417 4.08333 14.1 4.5 14.5833 5L16.6667 4.16667L18.3333 7.33333L16.55 8.70833C16.625 9.125 16.6667 9.55833 16.6667 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Settings',
      description: 'App preferences and privacy',
      color: 'text-info',
      bgColor: 'bg-info/10',
    },
    {
      id: 'help',
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.57501 7.50001C7.77093 6.94308 8.15767 6.47344 8.66663 6.17427C9.17559 5.87509 9.77404 5.76577 10.3559 5.86561C10.9378 5.96545 11.4656 6.26792 11.8458 6.71963C12.2261 7.17133 12.4342 7.74296 12.4333 8.33334C12.4333 10 9.93334 10.8333 9.93334 10.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 14.1667H10.0083" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Help & Support',
      description: 'FAQs and contact support',
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
  ];

  const handleSettingClick = (settingId) => {
    console.log('Setting clicked:', settingId);
    // Handle navigation
  };

  const handleLogout = () => {
    console.log('Logging out...');
    // Handle logout
  };

  const handleEditProfile = () => {
    console.log('Edit profile...');
    // Handle profile editing
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#4F8CFF] to-[#6A5CFF] px-5 pt-12 pb-24 rounded-b-[32px] shadow-soft-lg">
        <h1 className="text-2xl font-bold text-white mb-1">
          Profile
        </h1>
        <p className="text-sm text-white/80">
          Manage your account settings
        </p>
      </div>

      {/* Profile Card - Overlapping */}
      <div className="px-5 -mt-16 pb-6">
        <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-200/50">
          <div className="flex items-start gap-4 mb-5">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4F8CFF] to-[#6A5CFF] flex items-center justify-center text-white text-2xl font-bold shadow-soft-md flex-shrink-0">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
              ) : (
                user.name.split(' ').map(n => n[0]).join('').toUpperCase()
              )}
            </div>

            {/* User Info */}
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                {user.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2">{user.email}</p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M11.6667 12.25V11.0833C11.6667 10.4645 11.4208 9.87103 10.9832 9.43345C10.5456 8.99587 9.95217 8.75 9.33333 8.75H4.66667C4.04783 8.75 3.45434 8.99587 3.01675 9.43345C2.57917 9.87103 2.33333 10.4645 2.33333 11.0833V12.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="7" cy="4.66667" r="2.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {user.studentId}
                </span>
                <span>•</span>
                <span>{user.year}</span>
                <span>•</span>
                <span>{user.major}</span>
              </div>
            </div>
          </div>

          {/* Edit Profile Button */}
          <Button
            variant="secondary"
            size="sm"
            fullWidth
            onClick={handleEditProfile}
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.33333 2.66667H2.66667C2.31304 2.66667 1.97391 2.80714 1.72386 3.05719C1.47381 3.30724 1.33333 3.64638 1.33333 4V13.3333C1.33333 13.687 1.47381 14.0261 1.72386 14.2761C1.97391 14.5262 2.31304 14.6667 2.66667 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2761C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V8.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.3333 1.66665C12.5986 1.40144 12.9583 1.25244 13.3333 1.25244C13.7084 1.25244 14.0681 1.40144 14.3333 1.66665C14.5985 1.93187 14.7475 2.29158 14.7475 2.66665C14.7475 3.04173 14.5985 3.40144 14.3333 3.66665L8 9.99999L5.33333 10.6667L6 7.99999L12.3333 1.66665Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            Edit Profile
          </Button>
        </div>

        {/* Settings List */}
        <div className="mt-6 space-y-3">
          {settingsItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSettingClick(item.id)}
              className="w-full bg-white rounded-3xl p-4 shadow-soft hover:shadow-card transition-all duration-300 border border-gray-200/50 active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl ${item.bgColor} ${item.color} flex items-center justify-center flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="flex-1 text-left min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-400 flex-shrink-0">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <div className="mt-6">
          <Button
            variant="ghost"
            size="md"
            fullWidth
            onClick={handleLogout}
            className="text-error hover:bg-error/10"
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.3333 14.1667L17.5 10L13.3333 5.83334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 10H7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            Log Out
          </Button>
        </div>
      </div>

      {/* Bottom padding for navigation */}
      <div className="h-20"></div>
    </div>
  );
}

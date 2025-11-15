import React, { useState } from 'react';
import BottomNav from './components/BottomNav';

// Student Flow Screens
import StudentDashboard from './pages/student/StudentDashboard';
import FeedbackFormScreen from './pages/student/FeedbackFormScreen';
import FeedbackSubmittedScreen from './pages/student/FeedbackSubmittedScreen';

// Other Tab Screens
import AddFeedbackScreen from './screens/AddFeedbackScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeScreen, setActiveScreen] = useState('dashboard'); // dashboard, form, submitted
  const [selectedFormId, setSelectedFormId] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormClick = (formId) => {
    setSelectedFormId(formId);
    setActiveScreen('form');
  };

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
    setActiveScreen('submitted');
  };

  const handleBackToDashboard = () => {
    setActiveScreen('dashboard');
    setSelectedFormId(null);
    setSubmittedData(null);
  };

  const handleNavigate = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setActiveScreen('dashboard');
    }
  };

  const renderScreen = () => {
    // Home tab - Student Dashboard Flow
    if (activeTab === 'home') {
      switch (activeScreen) {
        case 'dashboard':
          return (
            <StudentDashboard
              onFormClick={handleFormClick}
              onNavigate={handleNavigate}
            />
          );
        case 'form':
          return (
            <FeedbackFormScreen
              formId={selectedFormId}
              onBack={handleBackToDashboard}
              onSubmit={handleFormSubmit}
            />
          );
        case 'submitted':
          return (
            <FeedbackSubmittedScreen
              formData={submittedData}
              courseData={{ 
                courseName: 'Data Structures & Algorithms', 
                instructorName: 'Dr. Sarah Mitchell', 
                semester: 'Fall 2025' 
              }}
              onBackToDashboard={handleBackToDashboard}
            />
          );
        default:
          return <StudentDashboard onFormClick={handleFormClick} onNavigate={handleNavigate} />;
      }
    }

    // Other tabs
    switch (activeTab) {
      case 'add':
        return <AddFeedbackScreen />;
      case 'notifications':
        return <NotificationsScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <StudentDashboard onFormClick={handleFormClick} onNavigate={handleNavigate} />;
    }
  };

  // Hide bottom nav when in form or submitted screens
  const showBottomNav = !(activeTab === 'home' && (activeScreen === 'form' || activeScreen === 'submitted'));

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-100 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      {showBottomNav && <BottomNav activeTab={activeTab} onTabChange={handleNavigate} />}
    </div>
  );
}
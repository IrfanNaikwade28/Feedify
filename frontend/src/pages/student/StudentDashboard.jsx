import React, { useState } from "react";
import { Search, Filter, Bell } from "lucide-react";
import Logo from "../../components/ui/Logo";
import Avatar from "../../components/ui/Avatar";
import { Card } from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import FeedbackCard from "../../components/feedback/FeedbackCard";
import { cn } from '../../utils/cn';

/**
 * Student Dashboard - Phase 1
 * Modern SaaS-style home screen with pending/completed sections
 */

export default function StudentDashboard({ onFormClick, onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // all, pending, completed

  // Mock student data
  const student = {
    name: "Alex Johnson",
    avatar: null,
    email: "alex.johnson@university.edu",
  };

  // Mock feedback forms data
  const feedbackForms = [
    {
      id: 1,
      courseName: 'Data Structures & Algorithms',
      instructorName: 'Dr. Sarah Mitchell',
      semester: 'Fall 2025',
      dueDate: new Date('2025-11-20'),
      status: 'available',
      category: 'Course Content',
    },
    {
      id: 2,
      courseName: 'Web Development',
      instructorName: 'Prof. John Anderson',
      semester: 'Fall 2025',
      dueDate: new Date('2025-11-18'),
      status: 'available',
      category: 'Teaching Style',
    },
    {
      id: 3,
      courseName: 'Database Systems',
      instructorName: 'Dr. Emily Chen',
      semester: 'Fall 2025',
      dueDate: new Date('2025-11-25'),
      status: 'pending',
      category: 'Resources',
    },
    {
      id: 4,
      courseName: 'Mobile App Development',
      instructorName: 'Prof. Michael Brown',
      semester: 'Fall 2025',
      dueDate: new Date('2025-11-10'),
      status: 'completed',
      category: 'Assessment',
    },
    {
      id: 5,
      courseName: 'Software Engineering',
      instructorName: 'Dr. David Wilson',
      semester: 'Fall 2025',
      dueDate: new Date('2025-11-05'),
      status: 'completed',
      category: 'General',
    },
  ];

  // Filter logic
  const filteredForms = feedbackForms.filter(form => {
    const matchesSearch = 
      form.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.instructorName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = 
      activeFilter === 'all' ||
      (activeFilter === 'pending' && (form.status === 'available' || form.status === 'pending')) ||
      (activeFilter === 'completed' && form.status === 'completed');
    
    return matchesSearch && matchesFilter;
  });

  const pendingForms = filteredForms.filter(f => f.status === 'available' || f.status === 'pending');
  const completedForms = filteredForms.filter(f => f.status === 'completed');

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Top Navigation */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-5 py-3 shrink-0 shadow-soft">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Logo size="sm" variant="light" />
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate?.('notifications')}
              className="relative p-2 hover:bg-gray-100/50 rounded-xl transition-all duration-300"
            >
              <Bell size={20} className="text-gray-500" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <Avatar 
              name={student.name} 
              src={student.avatar}
              size="sm"
              className="cursor-pointer"
              onClick={() => onNavigate?.('profile')}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Greeting Header */}
          <div className="space-y-1 animate-fade-in">
            <h1 className="text-3xl font-bold text-gray-900">
              {getGreeting()}, {student.name.split(' ')[0]}!
            </h1>
            <p className="text-gray-600">
              You have {pendingForms.length} pending feedback form{pendingForms.length !== 1 ? 's' : ''} to complete.
            </p>
          </div>

          {/* Search & Filter */}
          <Card className="animate-slide-up" padding="default">
            <div className="space-y-3">
              {/* Search Input */}
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses or instructors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-gray-200/60 focus:border-[#4F8CFF]/50 focus:ring-4 focus:ring-[#4F8CFF]/10 transition-all duration-300 outline-none text-sm shadow-soft"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2">
                {['all', 'pending', 'completed'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={cn(
                      "px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-300",
                      activeFilter === filter
                        ? "bg-gradient-to-r from-[#4F8CFF] to-[#6A5CFF] text-white shadow-soft-md"
                        : "bg-gray-100/70 text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* Pending Section */}
          {pendingForms.length > 0 && (activeFilter === 'all' || activeFilter === 'pending') && (
            <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  Pending Feedback
                </h2>
                <Badge variant="warning" size="sm">
                  {pendingForms.length}
                </Badge>
              </div>
              <div className="space-y-3">
                {pendingForms.map((form) => (
                  <FeedbackCard
                    key={form.id}
                    {...form}
                    onClick={() => onFormClick?.(form.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Completed Section */}
          {completedForms.length > 0 && (activeFilter === 'all' || activeFilter === 'completed') && (
            <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  Completed Feedback
                </h2>
                <Badge variant="success" size="sm">
                  {completedForms.length}
                </Badge>
              </div>
              <div className="space-y-3">
                {completedForms.map((form) => (
                  <FeedbackCard
                    key={form.id}
                    {...form}
                    onClick={undefined}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredForms.length === 0 && (
            <Card className="text-center py-12 animate-fade-in" padding="lg">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search size={28} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                No forms found
              </h3>
              <p className="text-sm text-gray-600">
                Try adjusting your search or filter settings
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

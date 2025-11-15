import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import Chip from '../components/Chip';

export default function AddFeedbackScreen() {
  const [formData, setFormData] = useState({
    course: '',
    teacher: '',
    category: '',
    feedback: '',
  });

  const [selectedTags, setSelectedTags] = useState([]);

  // Mock data - replace with actual API calls
  const courses = [
    { value: 'dsa', label: 'Data Structures & Algorithms' },
    { value: 'web', label: 'Web Development' },
    { value: 'db', label: 'Database Systems' },
    { value: 'mobile', label: 'Mobile App Development' },
    { value: 'se', label: 'Software Engineering' },
  ];

  const teachers = [
    { value: 'sarah', label: 'Dr. Sarah Mitchell' },
    { value: 'john', label: 'Prof. John Anderson' },
    { value: 'emily', label: 'Dr. Emily Chen' },
    { value: 'michael', label: 'Prof. Michael Brown' },
    { value: 'david', label: 'Dr. David Wilson' },
  ];

  const categories = [
    { value: 'content', label: 'Course Content' },
    { value: 'teaching', label: 'Teaching Style' },
    { value: 'resources', label: 'Resources' },
    { value: 'assessment', label: 'Assessment' },
    { value: 'general', label: 'General' },
  ];

  const quickTags = [
    'Helpful',
    'Clear Explanation',
    'Good Resources',
    'Engaging',
    'Well Organized',
    'Responsive',
  ];

  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = () => {
    console.log('Submitting feedback:', { ...formData, tags: selectedTags });
    // Handle form submission
  };

  const isFormValid = formData.course && formData.teacher && formData.category && formData.feedback.trim();

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#4F8CFF] to-[#6A5CFF] px-5 pt-12 pb-8 rounded-b-[32px] shadow-soft-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 20H21M3 20H7M12 4V20V4ZM12 4L15 7L12 4ZM12 4L9 7L12 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">
              Share Your Feedback
            </h1>
            <p className="text-sm text-white/80">
              Your opinion matters
            </p>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 px-5 py-6 overflow-y-auto pb-24">
        <div className="space-y-5">
          {/* Course Selection */}
          <Dropdown
            label="Select Course"
            placeholder="Choose a course"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            options={courses}
          />

          {/* Teacher Selection */}
          <Dropdown
            label="Select Teacher"
            placeholder="Choose a teacher"
            value={formData.teacher}
            onChange={(e) => setFormData({ ...formData, teacher: e.target.value })}
            options={teachers}
          />

          {/* Category Selection */}
          <Dropdown
            label="Feedback Category"
            placeholder="Choose a category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            options={categories}
          />

          {/* Quick Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Quick Tags (Optional)
            </label>
            <div className="flex flex-wrap gap-2">
              {quickTags.map((tag) => (
                <Chip
                  key={tag}
                  variant={selectedTags.includes(tag) ? 'primary' : 'default'}
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                </Chip>
              ))}
            </div>
          </div>

          {/* Feedback Text */}
          <Textarea
            label="Your Feedback"
            placeholder="Share your thoughts, suggestions, or concerns..."
            value={formData.feedback}
            onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
            rows={6}
            maxLength={500}
          />

          {/* Info Box */}
          <div className="bg-gradient-to-r from-[#4F8CFF]/10 to-[#6A5CFF]/10 border border-[#4F8CFF]/20 rounded-3xl p-4 flex gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 text-[#4F8CFF] mt-0.5">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 14V10M10 6H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div>
              <p className="text-sm text-[#4F8CFF] font-medium mb-1">
                Anonymous & Confidential
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Your feedback is completely anonymous and will be used to improve the learning experience.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleSubmit}
            disabled={!isFormValid}
            icon={
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18 2L9 11M18 2L12 18L9 11L2 8L18 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            Submit Feedback
          </Button>
        </div>
      </div>
    </div>
  );
}

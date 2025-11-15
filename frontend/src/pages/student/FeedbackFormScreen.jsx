import React, { useState } from 'react';
import { ArrowLeft, Send, Save, BookOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Avatar from '../../components/ui/Avatar';
import FormField from '../../components/feedback/FormField';
import Button from '../../components/Button';
import { cn } from '../../utils/cn';

/**
 * Feedback Form Screen - Phase 2
 * Complete feedback form with all field types
 */

export default function FeedbackFormScreen({ formId, onBack, onSubmit }) {
  const [formData, setFormData] = useState({
    // Ratings
    overallRating: 0,
    contentQuality: 0,
    teachingEffectiveness: 0,
    
    // Text fields
    strengths: '',
    improvements: '',
    suggestions: '',
    
    // MCQ/Select
    difficulty: '',
    paceOfCourse: '',
    
    // Toggle/YesNo
    wouldRecommend: false,
    materialsHelpful: false,
  });

  const [isSaving, setIsSaving] = useState(false);

  // Mock course data
  const courseData = {
    id: formId,
    courseName: 'Data Structures & Algorithms',
    courseCode: 'CS 301',
    instructorName: 'Dr. Sarah Mitchell',
    instructorEmail: 'sarah.mitchell@university.edu',
    semester: 'Fall 2025',
    category: 'Course Content',
    tags: ['Theory', 'Lab', 'Programming'],
  };

  const handleSaveDraft = () => {
    setIsSaving(true);
    // Simulate save
    setTimeout(() => {
      setIsSaving(false);
      alert('Draft saved successfully!');
    }, 1000);
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.overallRating) {
      alert('Please provide an overall rating');
      return;
    }
    
    onSubmit?.(formData);
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-5 py-4 shrink-0 sticky top-0 z-10 shadow-soft">
        <div className="flex items-center gap-3 max-w-3xl mx-auto">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-semibold text-gray-900 truncate">
              Feedback Form
            </h1>
            <p className="text-sm text-gray-600 truncate">
              {courseData.courseName}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Course Information Card */}
          <Card className="animate-fade-in">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <BookOpen size={24} className="text-primary-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="mb-2">
                    {courseData.courseName}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                    <span>{courseData.courseCode}</span>
                    <span>•</span>
                    <span>{courseData.semester}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-3">
                <Avatar name={courseData.instructorName} size="sm" />
                <div className="text-sm">
                  <div className="font-medium text-gray-900">{courseData.instructorName}</div>
                  <div className="text-gray-600">{courseData.instructorEmail}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary">{courseData.category}</Badge>
                {courseData.tags.map((tag) => (
                  <Badge key={tag} variant="default" size="sm">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Overall Rating Section */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle>Overall Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                type="rating"
                label="How would you rate this course overall?"
                value={formData.overallRating}
                onChange={(value) => updateField('overallRating', value)}
                ratingType="emoji"
                ratingSize="lg"
                required
              />
            </CardContent>
          </Card>

          {/* Specific Ratings Section */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.15s' }}>
            <CardHeader>
              <CardTitle>Course Evaluation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                type="rating"
                label="Content Quality & Relevance"
                value={formData.contentQuality}
                onChange={(value) => updateField('contentQuality', value)}
                ratingType="stars"
                required
              />
              <FormField
                type="rating"
                label="Teaching Effectiveness"
                value={formData.teachingEffectiveness}
                onChange={(value) => updateField('teachingEffectiveness', value)}
                ratingType="stars"
                required
              />
            </CardContent>
          </Card>

          {/* Multiple Choice Questions */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle>Course Difficulty & Pace</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <FormField
                type="select"
                label="How difficult was this course for you?"
                value={formData.difficulty}
                onChange={(value) => updateField('difficulty', value)}
                options={[
                  { value: 'too-easy', label: 'Too Easy' },
                  { value: 'appropriate', label: 'Appropriate' },
                  { value: 'challenging', label: 'Challenging' },
                  { value: 'too-difficult', label: 'Too Difficult' },
                ]}
                placeholder="Select difficulty level"
              />
              <FormField
                type="radio"
                label="How was the pace of the course?"
                value={formData.paceOfCourse}
                onChange={(value) => updateField('paceOfCourse', value)}
                options={[
                  { value: 'too-slow', label: 'Too Slow' },
                  { value: 'just-right', label: 'Just Right' },
                  { value: 'too-fast', label: 'Too Fast' },
                ]}
              />
            </CardContent>
          </Card>

          {/* Written Feedback */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.25s' }}>
            <CardHeader>
              <CardTitle>Detailed Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <FormField
                type="textarea"
                label="What did you find most valuable about this course?"
                value={formData.strengths}
                onChange={(value) => updateField('strengths', value)}
                placeholder="Share what you liked most..."
                rows={3}
                maxLength={500}
              />
              <FormField
                type="textarea"
                label="What could be improved?"
                value={formData.improvements}
                onChange={(value) => updateField('improvements', value)}
                placeholder="Share your suggestions for improvement..."
                rows={3}
                maxLength={500}
              />
              <FormField
                type="textarea"
                label="Additional Comments or Suggestions"
                value={formData.suggestions}
                onChange={(value) => updateField('suggestions', value)}
                placeholder="Any other feedback you'd like to share..."
                rows={4}
                maxLength={500}
              />
            </CardContent>
          </Card>

          {/* Yes/No Questions */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Would you recommend this course to other students?
                </label>
                <FormField
                  type="toggle"
                  value={formData.wouldRecommend}
                  onChange={(value) => updateField('wouldRecommend', value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Were the course materials helpful?
                </label>
                <FormField
                  type="toggle"
                  value={formData.materialsHelpful}
                  onChange={(value) => updateField('materialsHelpful', value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="bg-primary-50 border-primary-200 animate-slide-up" style={{ animationDelay: '0.35s' }}>
            <CardContent className="flex gap-3 py-4">
              <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center shrink-0 mt-0.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 3V6M6 8.5H6.005" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-sm space-y-1">
                <p className="font-medium text-primary-900">Your feedback is anonymous</p>
                <p className="text-primary-700">Your responses will be kept confidential and used only to improve the learning experience.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="bg-white border-t border-gray-200 px-5 py-4 shrink-0 sticky bottom-0 shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
        <div className="max-w-3xl mx-auto flex gap-3">
          <button
            onClick={handleSaveDraft}
            disabled={isSaving}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-medium transition-all",
              "hover:bg-gray-50 active:scale-[0.98]",
              isSaving && "opacity-50 cursor-not-allowed"
            )}
          >
            <Save size={18} />
            {isSaving ? 'Saving...' : 'Save Draft'}
          </button>
          <button
            onClick={handleSubmit}
            className={cn(
              "flex-[2] flex items-center justify-center gap-2 px-6 py-3 rounded-xl",
              "bg-gradient-to-r from-primary-500 to-primary-700 text-white font-medium shadow-soft-md",
              "hover:shadow-soft-lg active:scale-[0.98] transition-all"
            )}
          >
            <Send size={18} />
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

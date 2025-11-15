import React, { useEffect, useState } from "react";
import { CheckCircle2, Home, Download } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import { cn } from "../../utils/cn";

/**
 * Feedback Submitted Screen - Phase 3
 * Success state with confetti animation and submission summary
 */

export default function FeedbackSubmittedScreen({ formData, courseData, onBackToDashboard }) {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const submissionTime = new Date().toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <div className="relative flex flex-col h-full bg-gray-100 overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && <ConfettiAnimation />}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-5 py-12 pb-24">
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Success Icon & Message */}
          <div className="text-center space-y-4 animate-scale-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-success to-emerald-600 shadow-soft-lg mx-auto">
              <CheckCircle2 size={44} className="text-white" strokeWidth={2.5} />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">
                Feedback Submitted!
              </h1>
              <p className="text-gray-600">
                Thank you for taking the time to share your thoughts.
              </p>
            </div>
          </div>

          {/* Submission Summary Card */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Submission Summary</CardTitle>
                <Badge variant="success">Completed</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Course Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">{courseData?.courseName || 'Course Name'}</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Instructor: {courseData?.instructorName || 'N/A'}</p>
                  <p>Semester: {courseData?.semester || 'N/A'}</p>
                  <p>Submitted: {submissionTime}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium text-gray-900 mb-3">Your Responses</h4>
                <div className="space-y-3 text-sm">
                  
                  {/* Overall Rating */}
                  {formData?.overallRating > 0 && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Overall Rating</span>
                      <span className="font-medium text-gray-900">
                        {['Poor', 'Below Average', 'Average', 'Good', 'Excellent'][formData.overallRating - 1]}
                      </span>
                    </div>
                  )}

                  {/* Content Quality */}
                  {formData?.contentQuality > 0 && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Content Quality</span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: formData.contentQuality }).map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Teaching Effectiveness */}
                  {formData?.teachingEffectiveness > 0 && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Teaching Effectiveness</span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: formData.teachingEffectiveness }).map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Difficulty */}
                  {formData?.difficulty && (
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Course Difficulty</span>
                      <span className="font-medium text-gray-900 capitalize">
                        {formData.difficulty.replace('-', ' ')}
                      </span>
                    </div>
                  )}

                  {/* Recommendation */}
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Would Recommend</span>
                    <Badge variant={formData?.wouldRecommend ? "success" : "default"} size="sm">
                      {formData?.wouldRecommend ? 'Yes' : 'No'}
                    </Badge>
                  </div>

                  {/* Written Feedback Count */}
                  {formData?.strengths && (
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Written Feedback</span>
                      <span className="font-medium text-gray-900">Provided</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="bg-primary-50 border-primary-200 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="py-4 space-y-2 text-sm">
              <p className="font-medium text-primary-900">What happens next?</p>
              <ul className="space-y-1 text-primary-700">
                <li>• Your feedback will be reviewed by the academic team</li>
                <li>• Responses are kept anonymous and confidential</li>
                <li>• Insights will help improve future course offerings</li>
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={onBackToDashboard}
              className={cn(
                "w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl",
                "bg-gradient-to-r from-primary-500 to-primary-700 text-white font-medium shadow-soft-md",
                "hover:shadow-soft-lg active:scale-[0.99] transition-all"
              )}
            >
              <Home size={20} />
              Back to Dashboard
            </button>
            
            <button
              onClick={() => window.print()}
              className={cn(
                "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl",
                "border-2 border-gray-300 text-gray-700 font-medium",
                "hover:bg-gray-50 active:scale-[0.99] transition-all"
              )}
            >
              <Download size={18} />
              Download Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple Confetti Animation Component
function ConfettiAnimation() {
  const colors = ['#4C65F6', '#10B981', '#FACC15', '#EF4444', '#7C3AED', '#EC4899'];
  const confettiCount = 50;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: confettiCount }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10%',
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.7 + 0.3,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `confetti ${Math.random() * 3 + 2}s ease-out forwards`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti {
          to {
            transform: translateY(120vh) rotate(${Math.random() * 720}deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

import React from 'react';
import { Calendar, Clock, ChevronRight, BookOpen } from 'lucide-react';
import { Card } from '../ui/Card';
import Badge from '../ui/Badge';
import { cn } from '../../utils/cn';

/**
 * Premium Feedback Form Card
 * Modern SaaS-style card for displaying available feedback forms
 */

export function FeedbackCard({
  courseName,
  instructorName,
  semester,
  dueDate,
  status = "available", // available, pending, completed, closed
  category,
  onClick,
  className = "",
}) {
  const statusConfig = {
    available: { variant: "primary", label: "Available" },
    pending: { variant: "warning", label: "Pending" },
    completed: { variant: "success", label: "Completed" },
    closed: { variant: "closed", label: "Closed" },
  };

  const config = statusConfig[status] || statusConfig.available;

  // Format due date
  const formatDueDate = (date) => {
    if (!date) return null;
    const d = new Date(date);
    const now = new Date();
    const diffDays = Math.ceil((d - now) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "Overdue";
    if (diffDays === 0) return "Due today";
    if (diffDays === 1) return "Due tomorrow";
    if (diffDays <= 7) return `${diffDays} days left`;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <Card
      hoverable={status === "available"}
      onClick={status === "available" ? onClick : undefined}
      className={cn(
        "group relative overflow-hidden",
        status !== "available" && "opacity-75",
        className
      )}
    >
      {/* Gradient accent bar on left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4F8CFF] to-[#6A5CFF] rounded-l-3xl" />
      
      <div className="pl-4 space-y-3">
        {/* Header: Course Name + Status */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-base leading-tight mb-1 group-hover:text-[#4F8CFF] transition-colors">
              {courseName}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <BookOpen size={14} className="shrink-0" />
              <span className="truncate">{instructorName}</span>
            </div>
          </div>
          <Badge variant={config.variant} size="sm">
            {config.label}
          </Badge>
        </div>

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          {semester && (
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{semester}</span>
            </div>
          )}
          {dueDate && status === "available" && (
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span className={cn(
                formatDueDate(dueDate) === "Due today" && "text-warning font-medium",
                formatDueDate(dueDate) === "Due tomorrow" && "text-warning font-medium"
              )}>
                {formatDueDate(dueDate)}
              </span>
            </div>
          )}
        </div>

        {/* Category Tag */}
        {category && (
          <div>
            <Badge variant="default" size="sm">
              {category}
            </Badge>
          </div>
        )}

        {/* Action Arrow (only for available) */}
        {status === "available" && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4F8CFF]/10 to-[#6A5CFF]/10 flex items-center justify-center group-hover:from-[#4F8CFF]/20 group-hover:to-[#6A5CFF]/20 transition-all">
              <ChevronRight size={18} className="text-[#4F8CFF]" />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export default FeedbackCard;

# 📱 Feedify Student Mobile UI - Visual Hierarchy

## Screen Layouts

### 🏠 Home Screen Layout
```
┌─────────────────────────────────┐
│ ╔═══════════════════════════╗ │ ← Gradient Header (#3C6FF8)
│ ║  Your Feedback Forms    👤 ║ │
│ ║  Share your thoughts...    ║ │
│ ║                            ║ │
│ ║  🔍 [Search bar........]  ║ │
│ ╚═══════════════════════════╝ │
│                                 │
│  Available Forms          5     │
│                                 │
│ ┌─────────────────────────────┐ │ ← Form Card
│ │ Data Structures & Algorithms│ │
│ │ 👤 Dr. Sarah Mitchell      →│ │
│ │ [Course Content] Fall 2025  │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ Web Development             │ │
│ │ 👤 Prof. John Anderson     →│ │
│ │ [Teaching Style] Fall 2025  │ │
│ └─────────────────────────────┘ │
│                                 │
├─────────────────────────────────┤
│  🏠     ➕      🔔      👤     │ ← Bottom Nav
└─────────────────────────────────┘
```

### ➕ Add Feedback Screen Layout
```
┌─────────────────────────────────┐
│ ╔═══════════════════════════╗ │ ← Gradient Header
│ ║ 📤 Share Your Feedback     ║ │
│ ║    Your opinion matters    ║ │
│ ╚═══════════════════════════╝ │
│                                 │
│  Select Course               ▼  │
│  [Choose a course...........]   │
│                                 │
│  Select Teacher              ▼  │
│  [Choose a teacher..........]   │
│                                 │
│  Feedback Category           ▼  │
│  [Choose a category.........]   │
│                                 │
│  Quick Tags (Optional)          │
│  [Helpful] [Clear] [Engaging]   │
│                                 │
│  Your Feedback                  │
│  ┌───────────────────────────┐ │
│  │ Share your thoughts...    │ │
│  │                           │ │
│  │                           │ │
│  └──────────────────── 0/500 ┘ │
│                                 │
│  ℹ️  Anonymous & Confidential   │
│     Your feedback is safe...    │
│                                 │
│  [ 📤 Submit Feedback ]         │ ← Gradient Button
│                                 │
├─────────────────────────────────┤
│  🏠     ➕      🔔      👤     │
└─────────────────────────────────┘
```

### 🔔 Notifications Screen Layout
```
┌─────────────────────────────────┐
│ ╔═══════════════════════════╗ │ ← Gradient Header
│ ║  Notifications      🔵 2 new║ │
│ ║  Stay updated...           ║ │
│ ╚═══════════════════════════╝ │
│                                 │
│  🔵 Unread                      │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 🔵 Feedback Submitted       │ │
│ │    Your feedback for Web... │ │
│ │    🕐 30m ago               │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ 🔵 New Form Available       │ │
│ │    A new feedback form...   │ │
│ │    🕐 3h ago                │ │
│ └─────────────────────────────┘ │
│                                 │
│  Earlier                        │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Feedback Period Closing     │ │
│ │ The feedback period...      │ │
│ │ 🕐 1d ago                   │ │
│ └─────────────────────────────┘ │
│                                 │
├─────────────────────────────────┤
│  🏠     ➕      🔔      👤     │
└─────────────────────────────────┘
```

### 👤 Profile Screen Layout
```
┌─────────────────────────────────┐
│ ╔═══════════════════════════╗ │ ← Gradient Header
│ ║  Profile                   ║ │
│ ║  Manage your account...    ║ │
│ ║                            ║ │
│ ┌─────────────────────────────┐ │ ← Overlapping Card
│ │  ┌──┐                      │ │
│ │  │AJ│ Alex Johnson         │ │
│ │  └──┘ alex.johnson@...     │ │
│ │       STU-2024 • 3rd Year  │ │
│ │                            │ │
│ │  [ ✏️ Edit Profile ]       │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 📋 My Feedback            →│ │
│ │    View submitted feedback  │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ 🔔 Notification Settings  →│ │
│ │    Manage notifications     │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ ⚙️ Settings                →│ │
│ │    App preferences          │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ ❓ Help & Support          →│ │
│ │    FAQs and contact         │ │
│ └─────────────────────────────┘ │
│                                 │
│  [ 🚪 Log Out ]                 │
│                                 │
├─────────────────────────────────┤
│  🏠     ➕      🔔      👤     │
└─────────────────────────────────┘
```

---

## Component Hierarchy

### Button Component
```
┌─────────────────────┐
│  🔷 Button Text     │  ← Primary (gradient bg)
└─────────────────────┘

┌─────────────────────┐
│  🔷 Button Text     │  ← Secondary (border)
└─────────────────────┘

  🔷 Button Text         ← Ghost (transparent)
```

### Input/Textarea Components
```
Label Text
┌─────────────────────────┐
│ 🔍 Placeholder text...  │  ← With icon
└─────────────────────────┘

Label Text
┌─────────────────────────┐
│ Typed content here      │
│                         │
│                         │
└───────────────── 45/200 ┘  ← Character count
```

### Chip Component
```
[Default]  [Primary]  [Green]  [Yellow]  [Purple]  [Red]

[Tag Name ×]  ← With remove button
```

### Card Components
```
FormCard:
┌─────────────────────────────┐
│ Course Name                →│
│ 👤 Teacher Name             │
│ [Category] Semester         │
└─────────────────────────────┘

NotificationCard:
┌─────────────────────────────┐
│ 🔵 Notification Title       │
│    Description text here    │
│    🕐 Timestamp             │
└─────────────────────────────┘
```

---

## Visual Design System

### Color Application

#### Headers (All Screens)
```
╔═══════════════════════════╗
║  Gradient Background       ║  #3C6FF8 → #274FD9
║  White Text                ║  #FFFFFF
╚═══════════════════════════╝
```

#### Cards
```
┌─────────────────────────────┐
│ White Background    #FFFFFF │
│ Soft Shadow        rgba(...) │
│ Border          #E5E7EB/50  │
└─────────────────────────────┘
```

#### Text Hierarchy
```
Title Text       #1F2937  (font-bold)
Body Text        #6B7280  (font-medium)
Muted Text       #9CA3AF  (font-normal)
```

### Spacing System
```
Screen Padding:     20px (px-5)
Card Padding:       20-24px (p-5, p-6)
Element Gap:        12-16px (gap-3, gap-4)
Section Gap:        24px (space-y-6)
```

### Border Radius
```
Inputs:      12px (rounded-xl)
Cards:       20px (rounded-[20px])
Buttons:     12-24px (rounded-xl to rounded-2xl)
Avatar:      Full (rounded-full)
Chips:       8-12px (rounded-lg to rounded-xl)
```

### Shadows
```
Cards:       shadow-sm    (subtle)
Hover:       shadow-md    (medium)
Header:      shadow-lg    (pronounced)
```

---

## Interaction States

### Button States
```
Normal:    bg-gradient, scale-100
Hover:     shadow-lg
Active:    scale-95
Disabled:  opacity-50, cursor-not-allowed
```

### Input States
```
Normal:    border-[#E5E7EB]
Focus:     border-[#3C6FF8], ring-[#AFC6FF]/30
Error:     border-[#EF4444]
Disabled:  bg-[#F5F7FB], cursor-not-allowed
```

### Card States
```
Normal:    shadow-sm
Hover:     shadow-md
Active:    scale-[0.98]
```

### Navigation States
```
Inactive:  text-[#9CA3AF]
Active:    text-[#3C6FF8], scale-110, dot indicator
```

---

## Typography Scale

```
Hero Title:     text-2xl (24px)  font-bold
Section Head:   text-xl  (20px)  font-bold
Card Title:     text-lg  (18px)  font-semibold
Body Text:      text-base (16px) font-medium
Small Text:     text-sm   (14px) font-medium
Tiny Text:      text-xs   (12px) font-normal
```

---

## Icon Guidelines

### Icon Sizes
```
Navigation:  24x24px
Cards:       20x20px
Small:       16x16px
Buttons:     18-20px
```

### Icon Style
- Line-based icons
- 2px stroke width
- Rounded line caps
- Minimal detail
- Inline SVG for performance

---

## Mobile Optimization

### Viewport Settings
```html
<meta name="viewport" 
  content="width=device-width, initial-scale=1.0, 
  maximum-scale=1.0, user-scalable=no" />
```

### Touch Targets
```
Minimum:    44x44px (iOS guidelines)
Buttons:    48-52px height
Icons:      40x40px touch area
Navigation: 56px height
```

### Safe Areas
```
Top Padding:     48px (pt-12) for header
Bottom Padding:  96px (pb-24) for content above nav
Nav Height:      ~70px fixed at bottom
```

---

## Accessibility Features

### Color Contrast
```
✅ Text on White:     4.5:1 ratio
✅ Primary on White:  4.5:1 ratio
✅ Links visible:     Clear blue #3C6FF8
```

### Focus States
```
All interactive elements have:
- Focus ring (ring-2)
- Focus border color change
- Keyboard navigation support
```

### Screen Reader Support
```
- Semantic HTML tags
- Descriptive labels
- Alt text for icons (can be enhanced)
- ARIA labels (to be added)
```

---

## Performance Optimizations

### Inline SVG Icons
- No external requests
- Instant rendering
- Easy color customization

### Tailwind CSS
- Utility-first approach
- Small bundle size
- No unused CSS

### Component Structure
- Reusable components
- Minimal prop drilling
- Simple state management

---

## Responsive Behavior

```
Mobile:      Default (optimized for)
Tablet:      Max-width container (max-w-lg)
Desktop:     Centered with max-width
```

All screens are wrapped in:
```jsx
<div className="max-w-lg mx-auto">
  {/* Content */}
</div>
```

---

**Visual Design Complete! ✨**

This hierarchy ensures:
✅ Consistent spacing
✅ Clear visual flow
✅ Predictable interactions
✅ Beautiful aesthetics

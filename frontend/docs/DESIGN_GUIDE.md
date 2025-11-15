# 🎨 Feedify Student Mobile UI

A clean, modern, minimalistic student feedback mobile interface with white glass UI aesthetics and smooth blue accents.

## ✨ Design Overview

The Feedify Student UI is designed with:
- **Clean & Spacious Layout** - Generous padding and breathing room
- **Soft White Glass Aesthetic** - Pure white cards with subtle shadows
- **Modern Blue Accent** - Primary color `#3C6FF8` with smooth gradients
- **iOS-like Smoothness** - Rounded corners, smooth transitions
- **Mobile-First** - Optimized for mobile devices

### Design Inspiration
- ⭐ Google Classroom simplicity
- ⭐ Duolingo clean interface
- ⭐ Notion minimalism
- ⭐ iOS smooth interactions

---

## 🎨 Color Palette

```css
/* Primary Colors */
Primary Blue:        #3C6FF8
Primary Dark:        #274FD9
Primary Light:       #AFC6FF

/* Background & Surface */
Background:          #F5F7FB
Surface (Cards):     #FFFFFF
Sidebar Surface:     #EEF1F7

/* Text Colors */
Text Primary:        #1F2937
Text Secondary:      #6B7280
Text Muted:          #9CA3AF

/* Borders */
Border Soft:         #E5E7EB

/* Accent Colors */
Accent Green:        #10B981
Accent Yellow:       #FACC15
Accent Purple:       #7C3AED
Accent Red:          #EF4444
```

---

## 📐 Design Specifications

### Layout Rules
- **Page Margin**: 16-20px
- **Element Gap**: 12-16px
- **Card Radius**: 20px
- **Input Radius**: 12px
- **Button Height**: 48-52px
- **Icon Size**: 20-24px
- **Line Height**: 1.4-1.6

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

---

## 📱 Screens

### 1️⃣ Home Screen
**File**: `src/screens/HomeScreen.jsx`

**Features**:
- Gradient header with title and avatar
- Search bar for filtering forms
- Section header with count badge
- List of available feedback forms
- Each form card shows:
  - Course name
  - Teacher name with icon
  - Semester info
  - Category chip (color-coded)
  - Action arrow button

**Components Used**:
- `Input` (search)
- `FormCard` (list items)

---

### 2️⃣ Add Feedback Screen
**File**: `src/screens/AddFeedbackScreen.jsx`

**Features**:
- Gradient header with upload icon
- Form fields:
  - Course dropdown
  - Teacher dropdown
  - Category dropdown
  - Quick tag chips (optional)
  - Feedback textarea (500 char limit)
- Anonymous info card
- Large gradient submit button
- Form validation

**Components Used**:
- `Dropdown` (3 instances)
- `Chip` (quick tags)
- `Textarea` (feedback)
- `Button` (submit)

---

### 3️⃣ Notifications Screen
**File**: `src/screens/NotificationsScreen.jsx`

**Features**:
- Gradient header with unread count badge
- Grouped notifications:
  - "Unread" section (with blue dots)
  - "Earlier" section (read items)
- Each notification card shows:
  - Title
  - Description
  - Timestamp (formatted)
  - Unread indicator
- Empty state with icon and message

**Components Used**:
- `NotificationCard` (list items)

---

### 4️⃣ Profile Screen
**File**: `src/screens/ProfileScreen.jsx`

**Features**:
- Gradient header
- Overlapping profile card with:
  - Large avatar (gradient or initials)
  - User name and email
  - Student ID, year, major
  - Edit profile button
- Settings list:
  - My Feedback
  - Notification Settings
  - Settings
  - Help & Support
- Logout button
- Each setting row has:
  - Icon with colored background
  - Title and description
  - Right arrow

**Components Used**:
- `Button` (edit profile, logout)
- Custom setting cards

---

## 🧩 Reusable Components

### Button
**File**: `src/components/Button.jsx`

**Props**:
- `variant`: 'primary' | 'secondary' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `disabled`: boolean
- `icon`: ReactNode
- `onClick`: function

**Styles**:
- Pill-shaped with rounded corners
- Gradient background (primary)
- Smooth hover/active states
- Icon support

---

### Input
**File**: `src/components/Input.jsx`

**Props**:
- `label`: string
- `type`: string
- `placeholder`: string
- `value`: string
- `onChange`: function
- `icon`: ReactNode
- `error`: string
- `disabled`: boolean

**Styles**:
- Rounded corners (12px)
- Border focus animation
- Icon support (left side)
- Error state

---

### Textarea
**File**: `src/components/Textarea.jsx`

**Props**:
- `label`: string
- `placeholder`: string
- `value`: string
- `onChange`: function
- `rows`: number
- `maxLength`: number
- `error`: string
- `disabled`: boolean

**Styles**:
- Similar to Input
- Character counter
- Non-resizable
- Auto-growing height

---

### Dropdown
**File**: `src/components/Dropdown.jsx`

**Props**:
- `label`: string
- `placeholder`: string
- `value`: string
- `onChange`: function
- `options`: Array<{value, label}>
- `error`: string
- `disabled`: boolean

**Styles**:
- Custom styled select
- Chevron down icon
- Focus states
- Placeholder styling

---

### Chip
**File**: `src/components/Chip.jsx`

**Props**:
- `variant`: 'default' | 'primary' | 'green' | 'yellow' | 'purple' | 'red'
- `size`: 'sm' | 'md' | 'lg'
- `onClick`: function (optional)
- `onRemove`: function (optional)

**Styles**:
- Rounded pills
- Color-coded variants
- Clickable option
- Remove button option

---

### FormCard
**File**: `src/components/FormCard.jsx`

**Props**:
- `courseName`: string
- `teacherName`: string
- `semester`: string
- `category`: string
- `onClick`: function

**Styles**:
- White card with shadow
- Hover effect
- Color-coded category chip
- Gradient action button

---

### NotificationCard
**File**: `src/components/NotificationCard.jsx`

**Props**:
- `title`: string
- `description`: string
- `timestamp`: Date
- `isUnread`: boolean
- `onClick`: function

**Styles**:
- White card with shadow
- Unread blue dot indicator
- Formatted timestamp
- Hover effect

---

### BottomNav
**File**: `src/components/BottomNav.jsx`

**Props**:
- `activeTab`: string
- `onTabChange`: function

**Features**:
- Fixed bottom navigation
- 4 tabs: Home, Add, Notifications, Profile
- Active state indicator
- Smooth transitions
- iOS-style design
- Custom icons (inline SVG)

---

## 🚀 Running the App

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx       # Bottom navigation bar
│   │   ├── Button.jsx          # Reusable button
│   │   ├── Chip.jsx            # Tag/chip component
│   │   ├── Dropdown.jsx        # Select dropdown
│   │   ├── FormCard.jsx        # Feedback form card
│   │   ├── Input.jsx           # Text input
│   │   ├── NotificationCard.jsx # Notification item
│   │   └── Textarea.jsx        # Multi-line input
│   ├── screens/
│   │   ├── AddFeedbackScreen.jsx    # Add feedback form
│   │   ├── HomeScreen.jsx           # Home/forms list
│   │   ├── NotificationsScreen.jsx  # Notifications list
│   │   └── ProfileScreen.jsx        # User profile
│   ├── App.jsx             # Main app with navigation
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies
```

---

## 🎯 Key Features

### ✅ Fully Responsive
- Mobile-first design
- Optimized for iOS and Android
- Touch-friendly interactions

### ✅ Smooth Animations
- Transition effects on all interactions
- Scale animations on button press
- Smooth tab switching

### ✅ Accessible
- Proper semantic HTML
- ARIA labels (can be enhanced)
- Keyboard navigation support

### ✅ Consistent Design System
- Unified color palette
- Consistent spacing
- Reusable components
- Scalable architecture

### ✅ Modern Stack
- React 19
- Tailwind CSS
- Vite (fast build)
- Custom components (no heavy UI library)

---

## 🎨 Design Tokens

All design values are consistent across the app:

```javascript
// Spacing Scale
spacing: {
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '20px',
  xl: '24px',
}

// Border Radius
radius: {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px',
}

// Shadows
shadow: {
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  md: '0 4px 12px rgba(0,0,0,0.08)',
  lg: '0 8px 24px rgba(0,0,0,0.12)',
}
```

---

## 🔄 Navigation Flow

```
Home Screen
  ├─→ Click Form Card → (Future: Form Detail)
  └─→ Bottom Nav → Other Screens

Add Feedback Screen
  ├─→ Fill Form
  └─→ Submit → Success Message

Notifications Screen
  └─→ Click Notification → (Future: Detail View)

Profile Screen
  ├─→ Edit Profile → (Future: Edit View)
  ├─→ My Feedback → (Future: Feedback List)
  ├─→ Settings → (Future: Settings View)
  └─→ Logout → Clear Session
```

---

## 📝 Next Steps (Future Enhancements)

- [ ] Connect to backend API
- [ ] Add authentication flow
- [ ] Implement form submission
- [ ] Add feedback history view
- [ ] Real-time notifications
- [ ] Dark mode support
- [ ] Animations library (Framer Motion)
- [ ] Form validation library (React Hook Form)
- [ ] State management (Zustand/Context)
- [ ] Offline support (Service Worker)

---

## 🎉 Credits

**Design System**: Custom white glass UI inspired by modern minimalist apps
**Icons**: Custom inline SVG icons
**Font**: Inter (Google Fonts)
**Framework**: React + Tailwind CSS

---

Made with ❤️ for Feedify

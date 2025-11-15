# Feedify-AI

A modern mobile application for collecting student feedback with premium UI design and intelligent features.

## 🎨 Design System

**Theme:** Soft blue-to-purple gradient (`#4F8CFF` → `#6A5CFF`)  
**Style:** Premium SaaS aesthetic with glassmorphism and soft shadows  
**Framework:** React + Vite + Tailwind CSS  

## 📱 Features

- ✨ Student feedback flow (Dashboard → Form → Submission)
- 🎯 Real-time search & filtering
- 📊 Multiple rating types (stars, emojis)
- 💾 Draft saving capability
- 🎉 Success animations (confetti)
- 📱 Mobile-first responsive design
- 🌓 Modern UI components (Card, Badge, Avatar, Logo)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📂 Documentation

Detailed design documentation is available in the `docs/` folder:

- [**Design Guide**](docs/DESIGN_GUIDE.md) - Component architecture & usage
- [**Theme Upgrade**](docs/THEME_UPGRADE.md) - Color palette & visual improvements
- [**UI Improvements**](docs/UI_IMPROVEMENTS.md) - Feature overview & new components
- [**Visual Hierarchy**](docs/VISUAL_HIERARCHY.md) - Layout patterns & spacing system
- [**Quickstart**](docs/QUICKSTART.md) - Getting started guide

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool with HMR
- **Tailwind CSS 3** - Utility-first styling
- **Lucide React** - Modern icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI primitives
│   ├── feedback/        # Feedback-specific components
│   └── ...              # Other components
├── pages/
│   └── student/         # Student flow screens
├── screens/             # Other tab screens
└── App.jsx              # Main application
```

## 🎨 Component Library

- **Card** - Premium card component with header, content, footer
- **Badge** - Status indicators (10 variants)
- **Avatar** - User avatars with initials fallback
- **Button** - Primary, secondary, ghost variants
- **Logo** - Feedify-AI branding component
- **RatingInput** - Star & emoji ratings
- **FormField** - Universal form input (8 types)
- **FeedbackCard** - Course/form cards with status

---

Made with 💙💜 for Feedify-AI

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F4FF',
          100: '#E5EDFF',
          200: '#D1DDFF',
          300: '#B8CBFF',
          400: '#93ACFF',
          500: '#4F8CFF', // Gradient start (soft blue)
          600: '#6A5CFF', // Gradient end (soft purple)
          700: '#5B4AE5',
          800: '#4838CC',
          900: '#3A2DAD',
        },
        gray: {
          50: '#FAFBFC',
          100: '#F7F9FC', // Off-white background
          200: '#F0F3F7',
          300: '#E4E8EF',
          400: '#D0D5DD',
          500: '#98A2B3',
          600: '#667085',
          700: '#475467',
          800: '#344054',
          900: '#1D2939',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#6A5CFF',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4F8CFF 0%, #6A5CFF 100%)',
        'gradient-primary-hover': 'linear-gradient(135deg, #3D7AEB 0%, #5B4AE5 100%)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1.25rem',    // 20px
        '3xl': '1.5rem',     // 24px
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px 0 rgba(0, 0, 0, 0.03)',
        'soft-md': '0 4px 12px 0 rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 8px 25px 0 rgba(0, 0, 0, 0.05)',
        'soft-xl': '0 12px 35px 0 rgba(0, 0, 0, 0.06)',
        'card': '0 8px 25px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 35px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.96)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
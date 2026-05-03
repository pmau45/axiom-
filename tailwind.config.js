/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#050505',
        'brand-dark': '#0B0C10',
        'brand-panel': '#1A2030',
        'brand-border': '#1A2030',
        'brand-text': '#C5C6C7',
        'brand-orange': '#FF5E00',
        'brand-olive': '#7A8B66',
        'brand-blue': '#5B8FA8',
        'brand-cream': '#E8D5B7',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        chivo: ['Chivo', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out both',
        'slide-up': 'slideUp 0.5s ease-out both',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-left': 'slideLeft 0.4s ease-out',
        'stagger-1': 'slideUp 0.5s ease-out 0.1s both',
        'stagger-2': 'slideUp 0.5s ease-out 0.2s both',
        'stagger-3': 'slideUp 0.5s ease-out 0.3s both',
        'stagger-4': 'slideUp 0.5s ease-out 0.4s both',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(1rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(-1rem)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

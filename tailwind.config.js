/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          50: '#F0F8FF',
          100: '#E0F2FE',
          400: '#38BDF8',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        'brand-pink': {
          500: '#F472B6',
          600: '#EC4899',
        },
        'bg-main': '#E8F0F7',
        'bg-panel': '#F0F8FF',
      },
      spacing: {
        'card-sm': '1rem',      // 16px - small card padding
        'card-md': '1.25rem',   // 20px - medium card padding
        'card-lg': '1.5rem',    // 24px - large card padding
        'section': '2rem',      // 32px - section spacing
      },
      borderRadius: {
        'card': '1.5rem',       // 24px - use for all cards
        'button': '9999px',     // full - use for buttons
        'element': '1rem',      // 16px - use for inner elements
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'button': '0 6px 20px rgba(56, 189, 248, 0.35)',
      }
    },
  },
  plugins: [],
}
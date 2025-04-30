/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 6s ease infinite',
        'float': 'float 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'blink': 'blink 1s step-end infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        blink: {
          '50%': { opacity: '0' }
        }
      },
      backgroundSize: {
        '200%': '200% 200%'
      }
    },
  },
  plugins: [],
}
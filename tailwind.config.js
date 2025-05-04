/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          850: '#1e1e1e',
          900: '#18181b',
          950: '#09090b',
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        blink: 'blink 1.2s step-end infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      boxShadow: {
        terminal: '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
        'terminal-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.terminal-text': {
          '&::after': {
            content: '""',
            display: 'inline-block',
            width: '0.5rem',
            height: '1rem',
            backgroundColor: 'currentColor',
            animation: 'blink 1.2s step-end infinite',
            marginLeft: '0.25rem',
            verticalAlign: 'baseline',
          },
        },
      })
    },
  ],
}

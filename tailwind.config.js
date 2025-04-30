/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Extended color palette
        zinc: {
          850: '#1e1e1e',
          950: '#0a0a0a',
        },
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'blink': 'blink 1.2s step-end infinite',
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
        'terminal': '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
        'terminal-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [
    // Custom plugin for terminal-specific styles
    function({ addComponents }) {
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
          }
        }
      });
    }
  ],
};
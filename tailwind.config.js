/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'ui-serif',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
      },
      colors: {
        ink: {
          950: '#0b1220',
          900: '#0f172a',
          800: '#1b2740',
        },
        brand: {
          50: '#eef4ff',
          100: '#dbe8ff',
          200: '#bcd4ff',
          300: '#8fb6ff',
          400: '#5c8fff',
          500: '#3466ff',
          600: '#1e46e0',
          700: '#1935b3',
          800: '#182d8c',
          900: '#182a70',
        },
        sun: {
          400: '#ffb648',
          500: '#f79a1e',
          600: '#e07f0a',
        },
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgb(15 23 42 / 0.06)',
        card: '0 1px 2px 0 rgb(15 23 42 / 0.04)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '860px',
        wide: '1200px',
      },
      letterSpacing: {
        wider: '0.12em',
        widest: '0.18em',
      },
    },
  },
  plugins: [],
};

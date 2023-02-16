/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsla(212,100%, 85%,1)',
        primaryLight: 'hsla(212,100%, 65%,1)',
        primaryDark: 'hsla(212,100%, 25%,1)',
      },
    },
  },
  plugins: [],
};

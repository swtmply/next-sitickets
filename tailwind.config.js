module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        cover: 'inset 0px 0px 50px 7px #000',
      },
      colors: {
        red: {
          550: '#E93C3C',
          650: '#C01515',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

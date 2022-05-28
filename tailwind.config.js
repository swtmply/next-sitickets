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
        royal: {
          50: '#BCBEDC',
          100: '#646AB0',
          200: '#434881',
          300: '#2C2F53',
          400: '#121320',
        },
        crimson: {
          50: '#FAD3D3',
          100: '#F28282',
          200: '#E93C3C',
          300: '#C01515',
          400: '#8A0F0F',
        },
        grey: {
          50: '#E9E9E9',
          100: '#DADADA',
          200: '#C9C9C9',
          300: '#B7B7B7',
          400: '#A7A7A7',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

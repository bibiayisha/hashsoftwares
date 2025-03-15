/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        gold: '#fcbd00',
        gray: {
          100: '#f2f2f2',
          200: '#ebeef3',
          300: '#e9e9e9',
          400: '#c1c1c1',
          500: '#8799a3',
          600: '#4d4d4d',
          700: '#3a3a3a',
          800: '#282828',
          900: '#202020',
          1000: 'rgba(32, 32, 32, 0)',
          1100: 'rgba(0, 0, 0, 0)',
        },
        black: '#000',
        orange: { 100: '#f6b92d', 200: '#f2b704' },
      },
      fontFamily: { 'dm-sans': 'DM Sans' },
    },
    fontSize: {
      xs: '7.7px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '32px',
      '4xl': '42px',
      '5xl': '58px',
      '6xl': '68px',
      '7xl': '120px',
      '8xl': '152px',
    },
  },
  plugins: [],
}

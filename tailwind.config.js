/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(+10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out',
      },
    },
    fontFamily: {
      appleBold: ['San-Francisco-Bold'],
      appleSemiBold: ['San-Francisco-Semi-Bold'],
      appleMedium: ['San-Francisco-Medium'],
      appleRegular: ['San-Francisco-Regular'],
    },
    screens: {
      laptopL: { max: '1440px' },
      laptopM: { max: '1280px' },
      laptop: { max: '1024px' },
      tablet: { max: '768px' },
      mobileL: { max: '425px' },
      mobileM: { max: '375px' },
      mobileS: { max: '320px' },
    },
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary-accent': '#024950',
        'primary-accent-hover': '#013A40',
        'primary-accent-light': '#C2DFE0',
        'primary-accent-lighter': '#E0F2F2',
        'primary-accent-dark': '#31C2B3',
        'primary-accent-dark-hover': '#2AA79B',
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      transitionProperty: {
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
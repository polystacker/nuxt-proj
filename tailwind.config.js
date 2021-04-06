module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'mons': "url('/assets/fonts/Montserrat-Medium.ttf')",
      },

      rotate: {
        '-180': '-180deg',
         '-90': '-90deg',
        '-45': '-45deg',
         '0': '0',
         '45': '45deg',
         '90': '90deg',
        '135': '135deg',
         '180': '180deg',
        '360': '360deg',
       },
      colors: {
        'indigo-main': '#6366f2',
        'indigo-light': '#A899F7',
        'gray-light': '#374151',
        'gray-dark': '#191F2B',
        'indigo-dark': '#874BFF',
        'gray-main': '#222224',
        'gray-content': '#161617',
        'gray-second': '#76767A'
      },
      backgroundImage: theme => ({
        'road-main': "url('/assets/back.jpg')"
      })
    },
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Formata', 'ui-sans-serif'],
      body: ['Roboto', 'ui-sans-serif'],
    },
    colors: {
      yellow: '#F0EBBE',
      white: '#FFFFFF',
      black: '#291012',
      red: {
        light: '#D8B1A6',
        DEFAULT: '#9E3E23',
        dark: '#4D1716',
      },
      pink: {
        DEFAULT: '#F8EBE7',
        dark: '#D8B1A6',
      },
    },
    extend: {
      spacing: {
        192: '48rem',
        384: '96rem',
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

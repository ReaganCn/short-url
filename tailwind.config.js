module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'opensans': ['Open Sans'],
          },
    extend: {
      keyframes: {
        fadein: {
          '0%': {color: 'black'},
          '100%': {color: 'blue'}
        }
      },
      animation: {
        fadein: 'fadein 3s ease-in-out'
      }
    }
  },
  variants: {},
  plugins: [],
}

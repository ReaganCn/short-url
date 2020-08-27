module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'opensans': ['Open Sans'],
      'comicsans': ['Comic Sans MS'],
      'dupuy': ['Dupuy']
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
      },
      colors: {
        darkviolet: "#780fb8"
      }
    }
  },
  variants: {},
  plugins: [],
}

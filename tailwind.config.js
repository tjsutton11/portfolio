module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('../images/gabriel-porras-keyboard-unsplash.jpg')",
      }),
      fontFamily: {
          body: ['Nunito'],
          header: ['Merriweather']
      },
    },
  },
  variants: {},
  plugins: [],
}

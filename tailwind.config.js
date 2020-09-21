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
        'about-image': "url('../images/josh-rose-building-unsplash.jpg')"
      }),
      fontFamily: {
          body: ['Nunito']
      },
      screens: {
        pxl: '411px'
      }
    },
  },
  variants: {},
  plugins: [],
}

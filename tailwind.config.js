module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'banner-image':"url(/src/images/banner.png)"
      },
      colors:{
        primary:'#E53D2D',
        secondary:'#0F0E16',
      }
    },
  },
  plugins: [],
}

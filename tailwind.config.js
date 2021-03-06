module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner-image': "url(/src/images/banner.png)"
      },
      colors: {
        primary: '#E53D2D',
        secondary: '#0D0C16',
      },
      boxShadow: {
        'cShadow': '4px -2px 20px 15px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#E53D2D',
          secondary: '#0D0C16',
          accent: "#3A4256",
          neutral: "#3A4256",
          "base-100": "#ffffff",
        },
      }
    ],
  },
  plugins: [require("daisyui")],

}


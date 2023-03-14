/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  safelist:[
    'not-prose',
  ],
  theme: {
    fontFamily: {
      sans: ["Arial", "sans-serif"],
      serif: ["Avenir Next", "serif"],
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
    extend: {
      height: {
        'og': '627px',
      },
      colors: {
        primary: "#354E57",
        secondary: "#EEF2F4",
        accent: "#5B8595",
        cloud: "#F7F7F7",
        "primary-active": '#547665'
      },
      width: {
        'og': '1200px',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}

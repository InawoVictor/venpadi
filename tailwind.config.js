/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EA7E41",
        "primary-darken-1": "#E16119",
        "primary-darken-2": "#C95D2F",
        secondary: "#6C7278",
        dark: "#1A1C1E",
        gray1: "#DCE4E8",
        info: "#4D81E7",
        "info-darken-1": "#3863C6",
        "info-lighten-1": "#78A5F0",
        warning: "#ECAC31",
        error: "#C65468",
        success: "#12B3A8",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      }, 
      fontSize: {
        md: ['1rem', '1.5rem']
      }
    },
  },
  plugins: [],
}


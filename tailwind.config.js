/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-color": "#0C356A",
        "primary-color-alt": "#0174BE",
        "secondary-color": "#FFC436",
        "accent-color": "#FFF0CE",
      },
    },
  },
  plugins: [],
}


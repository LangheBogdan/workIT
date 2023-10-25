/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "rgba(36, 5, 62, 1)",
        eucalyptus: "rgba(68, 255, 161, 1)",
        "davys-grey": "rgba(88, 77, 98, 1)",
        "ghost-white": "rgba(252, 248, 255, 1)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      borderRadius: {
        "bottom-arch": " 0 0 100% 50%/0 0 30px 30px;",
      },
    },
  },
  plugins: [],
};

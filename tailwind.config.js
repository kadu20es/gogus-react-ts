/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-top': '0px 25px 0 0px #FFF', // Defina sua sombra personalizada
        'custom-bottom': '0 -25px 0 0 #FFF',
      }
    },
  },
  plugins: [],
}


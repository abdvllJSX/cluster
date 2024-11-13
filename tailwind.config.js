/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {},
      screens: {
        'sm': { 'max': '640px' }
      },
      backgroundImage: {
        'auth-bg': "linear-gradient(180deg, rgba(0, 0, 0, 0) 35.96%, #000000 108%), url('/auth/auth_image.jpeg')",
        'card_gradient': 'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), linear-gradient(0deg, #AF47D2, #AF47D2)',
        'banner': "url('/landing/line_pattern_1.png'), linear-gradient(0deg, #000000, #000000)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}


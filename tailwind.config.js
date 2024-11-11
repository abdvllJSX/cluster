/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      screens: {
        sm: { max: "640px" },
      },
      backgroundImage: {
        "auth-bg":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 35.96%, #000000 108%), url('/img/auth_image.jpeg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

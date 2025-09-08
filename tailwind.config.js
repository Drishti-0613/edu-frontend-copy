// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1B1B28",
        card: "#2A2A3D",
        text: "#E5E5E5",
        primary: "#4B6EF5",
        primaryHover: "#3B5CD0",
        border: "#3A3A4D",
      },
    },
  },
  plugins: [],
}

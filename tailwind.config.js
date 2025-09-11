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

        // Role-based palettes
        student: {
          primary: "#3B82F6",   // Blue
          secondary: "#1E40AF",
          accent: "#E0EAFF",
        },
        instructor: {
          primary: "#10B981",   // Green
          secondary: "#065F46",
          accent: "#DFF7EF",
        },
        admin: {
          primary: "#F59E0B",   // Amber
          secondary: "#78350F",
          accent: "#FFF7E6",
        },
        superadmin: {
          primary: "#8B5CF6",   // Purple
          secondary: "#4C1D95",
          accent: "#F1E9FF",
        },
      },
    },
  },
  safelist: [
    // ensure these classes don’t get purged
    {
      pattern: /(bg|text|hover:bg)-(student|instructor|admin|superadmin)-(primary|secondary|accent)/,
    },
  ],
  plugins: [],
};

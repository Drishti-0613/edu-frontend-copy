/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // modern minimal palette — tweak in themeConfig if desired
        primary: {
          50:  '#f6fbff',
          100: '#e8f3ff',
          200: '#c7e6ff',
          300: '#9fd7ff',
          400: '#66c0ff',
          500: '#1aa0ff', // main accent
          600: '#138be6',
          700: '#0f6fb3',
          800: '#0b537f',
          900: '#083950'
        },
        neutral: {
          50:  '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9aa3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        surface: {
          50: '#ffffff',
          100: '#fbfcfd',
          200: '#f6f8f9',
          300: '#eef3f6'
        }
      },
      borderRadius: {
        xl: '1rem'
      },
      boxShadow: {
        subtle: '0 4px 18px rgba(12,18,30,0.06)'
      }
    }
  },
  plugins: []
}

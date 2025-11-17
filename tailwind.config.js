/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        'tablet': '642px',
        'desktop': '757px',
      },
      colors: {
        "primary": "#256af4",
        "background-light": "#f5f6f8",
        "background-dark": "#101622",
        "text-light": "#121212",
        "text-dark": "#EAEAEA",
        "subtle-light": "#E0E0E0",
        "subtle-dark": "#282e39"
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}


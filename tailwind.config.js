/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ifriend-blue': '#1e3a8a', // Example airline blue
        'ifriend-red': '#dc2626',
      }
    },
  },
  plugins: [],
}

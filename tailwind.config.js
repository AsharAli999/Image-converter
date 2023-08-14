/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'custom-gradient': '#0e0e77',
        'custom-gradient-alt': '#341a7a',
        'custom-gradient-alt-2': '#9e9eb3',
      },
    },
  },
  plugins: [],
}
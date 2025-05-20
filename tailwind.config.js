/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        founders: ['Founders Grotesk', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: []
}


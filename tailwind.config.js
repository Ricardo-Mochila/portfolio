/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "background-color": "var(--background-color)",
      },
      aspectRatio: {
        '16/9' : '16 / 9'
      },
      inset: {
        'unset': 'unset'
      },
      fontFamily: {
        mono: ['var(--mono)'],
      },
    },
  },
  plugins: [],
}
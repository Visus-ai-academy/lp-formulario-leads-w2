/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7ebfbf',
        background: '#012e40',
        foreground: '#f0f4e7',
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

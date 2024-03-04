/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      zIndex: {
        '100': 100,
        '1030': 1030
      },
      width: {
        '350': '21.875rem',
      },
      colors: {
        'main': '#EC1B90',
        'white': '#ffffff',
        'black': '#000000',
        'success': '#32A336',
        'info': '#17a2b8',
        'warning': '#ffc107',
        'danger': '#c82333',
        'primary': '#3B0066',
        'midnight': '#121212',
        'widget': '#262626',
        'input': '#393939'

      },
      boxShadow: {
        'autofill': 'inset 0 0 0px 9999px var(--tw-shadow-color)',
      },
      container: {
        padding: '2rem',
        center: true,
      },
      animation: {
        'fade-in': 'fade-in .5s linear 1 normal forwards',
        'fade-out': 'fade-out .5s linear 1 normal forwards',
      },
    },
  },
  plugins: [],
}
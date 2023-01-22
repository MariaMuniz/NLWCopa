/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      backgroundImage: {
        app: 'url(/app-bg.png)'
      },

      colors: {
        ignite: {
          500: '#129E57'
        },
        yellow: {
          500: '#f7dd43',
          700: '#E5CD3D'
        },
        gray: {
          900: '#121214',
          800: '#202024',
          600: '#323238',
          300: '#8d8d99',
          100: '#E1E1E6'
        }
      }
    },
  },
  plugins: [],
}

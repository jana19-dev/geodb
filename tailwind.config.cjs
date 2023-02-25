const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/@codepiercer/svelte-tailwind/**/*.svelte'
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      }
    }
  },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}

module.exports = config

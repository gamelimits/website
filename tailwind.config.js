import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: 'class',

  content: ['./src/app/**/*.tsx', './src/components/**/*.tsx', './src/containers/**/*.tsx'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};

module.exports = tailwindConfig;

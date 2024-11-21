const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: colors.transparent,
      white: colors.white,
      black: colors.black,
      primary: colors.stone,
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
};

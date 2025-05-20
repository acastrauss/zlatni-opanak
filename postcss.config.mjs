export default {
  plugins: {
    '@tailwindcss/postcss': {
      darkMode: ['selector', '[data-theme="dark"]', '.dark'],
    },
  },
}

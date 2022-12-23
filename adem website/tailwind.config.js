/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./**/*.html"],
  content: ["index.html"],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('./img/background-image.png')",
      }
    },
  },
  plugins: [],
}
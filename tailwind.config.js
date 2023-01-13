/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      content: {
            'lista': 'url("/public/dist/assets/img/icones/lista.svg")',
          },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.ejs", // O ajusta la extensión según tu motor de plantillas
    "./src/public/**/*.html",
    "./src/public/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false, 
    themes: ["light"],
  },
};

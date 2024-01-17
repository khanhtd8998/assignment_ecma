/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/components/*.{html,js}, ./src/pages/*.{html,js} "],
  prefix: "tw-",
  theme: {
    extend: {},
  },
  plugins: [],
}


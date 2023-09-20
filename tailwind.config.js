/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pomp: ["Pompiere", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        galada: ["Galada", "sans-serif"],
        inter: ["inter", "sans-serif"],
        mom: ["Montserrat", "san-serif"],
      },
      colors: {
        body: "#291600",
        card: "#DBBCA1",
        cardbg: "#655546",
        text: "#1B0B0B",
        button: "#2F1F14",
        author: "#0A424F",
      },
    },
  },
  plugins: [],
};

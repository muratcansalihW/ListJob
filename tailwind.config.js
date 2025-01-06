/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        jakarta: ["Plus Jakarta Sans"],
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/blob.svg')",
      },
      colors: {
        aqua: "#81D8D0",
        cardBg: "#f7f7f7",
      },
      boxShadow: {
        headerShadow: "0 2px 30px #0c35731a",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: { md: "900px" },
      colors: {
        umber: "#231b11",
        umber2: "#3a2d1b",
        pearl: "#faf8f4",
        sand: "#efe8da",
        gold: "#826536",   // logo colour
        goldlt: "#d9c08a", // logo colour, lightened for dark backgrounds
        ink: "#2a241b",
        mut: "#6b6254",
        line: "#e3dccd",
      },
      fontFamily: {
        fd: ["var(--fd)", "Georgia", "serif"],
        fb: ["var(--fb)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        dusk: "radial-gradient(120% 80% at 82% 8%, #5b4524 0%, transparent 60%), radial-gradient(90% 70% at 8% 100%, #3a2c18 0%, transparent 70%)",
      },
      keyframes: {
        fade: { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      animation: { fade: "fade 1.2s ease-out backwards" },
    },
  },
  plugins: [],
};

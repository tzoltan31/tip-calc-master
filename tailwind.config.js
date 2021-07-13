module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: { morewide: ".25em" },
      colors: {
        cyan: {
          primary: "#26C0AB",
          verydark: "#00494D",
          darkgray: "#5E7A7D",
          darkgray2: "#7F9C9F",
          lightgray: "#C5E4E7",
          lightgray2: "#F4FAFA",
          hover: "#6AE2D1",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

console.log(process.env.NODE_ENV);
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: {
      main: "#1f2937",
      mainWhite: "#fff",
    },
    color: {
      main: "#1f2937",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

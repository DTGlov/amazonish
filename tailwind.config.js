module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          amazon: "#373F47",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

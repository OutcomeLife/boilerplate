module.exports = {
  presets: [
    "es2015",
    "react",
    "stage-1",
  ],
  env: {
    development: {
      plugins: []
    },
    production: {
      plugins: ["transform-react-remove-prop-types"],
    }
  },
  plugins: [
  ],
};

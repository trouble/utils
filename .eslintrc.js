module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
  },
  extends: [
    "@trbl/eslint-config/configs/base",
    "@trbl/eslint-config/configs/jest"
  ],
  rules: {
    "jest/no-disabled-tests": "off"
  }
};
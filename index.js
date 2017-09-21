module.exports = {
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    'html',
    'json',
  ],
  rules: {
    'new-cap': ['error', {capIsNewExceptions: ['Polymer']}],
  },
  globals: {
    UdeS: true,
    Polymer: true,
  },
};

module.exports = {
  // Defines global variables that are predefined
  env: {
    // Browser global variables
    browser: true,
  },

  // Extends the UdeS ESLint config
  extends: ['./index.js'],

  // Supported JavaScript language options
  parserOptions: {
    // Enables ES2015 syntax
    ecmaVersion: 2015,
  },

  // Plugins
  plugins: [
    // Allows linting and fixing inline scripts contained in HTML files
    'eslint-plugin-html',
  ],
};

module.exports = {
  // Extends the UdeS ESLint config
  extends: ['./index.js'],

  // Supported JavaScript language options
  parserOptions: {
    // Enables ES2018 syntax
    ecmaVersion: 2020,

    // Code is in ECMAScript modules (default: script)
    sourceType: 'module',
  },

  // Defines global variables that are predefined
  env: {
    // Node.js global variables and Node.js scoping
    node: true,
  },
};

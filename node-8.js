module.exports = {
  // Extends the UdeS ESLint config
  extends: [
    './index.js',
  ],

  // Supported JavaScript language options
  parserOptions: {
    // Enables ES8/ES2017 syntax
    ecmaVersion: 8,

    // Code is in ECMAScript modules (default: script)
    sourceType: 'module',
  },

  // Defines global variables that are predefined
  env: {
    // Enable ES6 features (automatically sets the ecmaVersion parser option to 6)
    es6: true,

    // Node.js global variables and Node.js scoping
    node: true,
  },
};

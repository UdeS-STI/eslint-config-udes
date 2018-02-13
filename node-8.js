module.exports = {
  // Extends the UdeS ESLint config
  extends: [
    './index.js',
  ],

  // Supported JavaScript language options
  parserOptions: {
    // Enables ES7/ES2016 syntax
    ecmaVersion: 7,
  },

  // Defines global variables that are predefined
  env: {
    // Enable ES6 features (automatically sets the ecmaVersion parser option to 6)
    es6: true,

    // Node.js global variables and Node.js scoping
    node: true,
  },
};

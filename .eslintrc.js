module.exports = {
  // Extends the UdeS ESLint config
  extends: [
    './index.js',
  ],

  // Defines global variables that are predefined
  env: {
    // Node.js global variables and Node.js scoping
    node: true,
  },

  // Limit ESLint to a specific project
  root: true,
};

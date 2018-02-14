module.exports = {
  // Extends the UdeS ESLint config
  extends: [
    './index.js',
  ],

  // Use of third-party plugins
  plugins: [
    'eslint-plugin-react',
  ],

  // Defines global variables that are predefined
  env: {
    // Node.js global variables and Node.js scoping
    node: true,
  },

  // Custom rules
  rules: {
    'react/jsx-uses-vars': 'error',
  },
};

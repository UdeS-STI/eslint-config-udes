module.exports = {
  // Defines global variables that are predefined
  env: {
    // Browser global variables
    browser: true,

    // Node.js global variables and Node.js scoping
    node: true,
  },

  // Extends the UdeS ESLint config
  extends: ['./index.js'],

  // Use of third-party plugins
  plugins: ['eslint-plugin-react'],

  // Custom rules
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unused-prop-types': 'error',
    'react/require-default-props': 'error',
  },
};

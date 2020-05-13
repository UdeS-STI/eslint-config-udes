const prettierConfigUdeS = require('prettier-config-udes');

module.exports = {
  // Supported JavaScript language options
  parserOptions: {
    // Enables ES6/ES2015 syntax
    ecmaVersion: 6,
  },

  // Use of third-party plugins
  plugins: [
    // Runs Prettier, an opinionated code formatter
    'eslint-plugin-prettier',

    // Lint and format JSON files
    'eslint-plugin-json-format',

    // Lint Markdown files
    'eslint-plugin-markdown',
  ],

  // Custom rules
  rules: {
    // Use UdeS Prettier configuration
    'prettier/prettier': ['error', prettierConfigUdeS],
  },
};

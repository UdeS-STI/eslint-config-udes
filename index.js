const prettierConfigUdeS = require('prettier-config-udes');

module.exports = {
  overrides: [
    {
      // Explicitly apply eslint-plugin-markdown's `markdown`
      // processor on any Markdown files we want to lint
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
  ],

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

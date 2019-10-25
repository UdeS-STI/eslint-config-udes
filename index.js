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
    // Override some Prettier configuration
    'prettier/prettier': [
      'error',
      {
        // Include parentheses around a sole arrow function parameter | a => ... | (a) => ...
        arrowParens: 'always',

        // Use single quotes instead of double quotes
        singleQuote: true,

        // Print trailing commas wherever possible when multi-line, where valid in ES5 (objects, arrays, etc.)
        trailingComma: 'es5',
      },
    ],
  },
};

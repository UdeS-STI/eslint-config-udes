module.exports = {
  // Extends the JavaScript Standard Style
  extends: [
    'eslint:recommended',
    'google',
  ],

  // Supported JavaScript language options
  parserOptions: {
    // Enables ES6/ES2015 syntax
    ecmaVersion: 6,
  },

  // Defines global variables that are predefined
  env: {
    // Enable ES6 features (automatically sets the ecmaVersion parser option to 6)
    es6: true,
  },

  // Use of third-party plugins
  plugins: [
    // Lint JSON files
    'eslint-plugin-json',

    // Lint markdown files
    'eslint-plugin-markdown',
  ],

  // Custom rules
  rules: {
    // Requires trailing commas when the last element or property is in a different line than the closing ] or }
    'comma-dangle': [
      'error', {
        'arrays': 'always-multiline', // let [a,] = [1,]
        'exports': 'always-multiline', // export {a,}

        // Should only be enabled when linting ECMAScript 2017 (ES8) or higher
        'functions': 'ignore', // (function(a,){ })(b,)

        'imports': 'always-multiline', // import {a,} from "foo"
        'objects': 'always-multiline', // let {a,} = {a: 1}
      }],

    // Enforces at least one newline  at the end of non-empty files
    'eol-last': ['error', 'always'],

    // Consistent indentation style
    'indent': ['error', 2],

    // Consistent line endings independent of operating system, VCS, or editor used across your codebase (default: unix)
    'linebreak-style': ['error', 'unix'],

    // Enforce a maximum line length of 120 characters (instead of 80 from Standard) [See pull request #4]
    'max-len': ['error', 120],

    // Disallow trailing spaces at the end of lines
    'no-trailing-spaces': 'error',

    // Disallow the use of console [See pull request #2]
    'no-console': 'warn',

    // Require or disallow semicolons instead of ASI
    'semi': ['error', 'always'],
  },
};

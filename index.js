module.exports = {
  // Extends the JavaScript Standard Style
  extends: ['eslint-config-standard'],

  parserOptions: {
    // Enables ES6/ES2015 syntax
    ecmaVersion: 6,
  },

  // Defines global variables that are predefined
  env: {
    // Browser global variables
    browser: true,

    // Enable ES6 features (automatically sets the ecmaVersion parser option to 6)
    es6: true,

    // Node.js global variables and Node.js scoping
    node: true,
  },

  // Use of third-party plugins
  plugins: [
    // Allows linting and fixing inline scripts contained in HTML files
    'eslint-plugin-html',

    // Lint JSON files
    'eslint-plugin-json',
  ],

  // Custom rules
  rules: {
    // Requires trailing commas when the last element or property is in a different line than the closing ] or }
    'comma-dangle': ['error', {
      'arrays': 'always-multiline', // let [a,] = [1,]
      'exports': 'always-multiline', // export {a,}

      // Should only be enabled when linting ECMAScript 2017 (ES8) or higher
      'functions': 'ignore', // (function(a,){ })(b,)

      'imports': 'always-multiline', // import {a,} from "foo"
      'objects': 'always-multiline', // let {a,} = {a: 1}
    }],

    // Enforce a maximum line length of 120 characters (instead of 80 from Standard) [See pull request #4]
    'max-len': ['error', 120],

    // Require constructor names to begin with a capital letter
    'new-cap': [
      'error', {
        // Allows specified uppercase-started function names to be called without the new operator
        capIsNewExceptions: ['Polymer'],

        // Allows any uppercase-started function names that match the specified regex pattern to be called without the
        // new operator
        capIsNewExceptionPattern: '^(UdeS|Polymer)',
      }],

    // Disallow the use of console [See pull request #2]
    'no-console': 'warn',

    // Require JSDoc comments
    'require-jsdoc': [
      'error', {
        // Requires JSDoc comments for the specified nodes
        'require': {
          // Class Foo
          'ClassDeclaration': true,

          // function foo() {}
          'FunctionDeclaration': true,

          // constructor() {} [See pull request #1]
          'MethodDefinition': false,
        },
      },
    ],

    // Enforce valid JSDoc comments
    'valid-jsdoc': ['error', {
      // If and only if the function or method has a return statement [See pull request #1]
      requireReturn: false,
    }],
  },

  // Variables that are accessed but not defined within the same file
  globals: {
    // UdeS components and global scoped variables
    UdeS: true,

    // UdeS components and global scoped variables
    Polymer: true,
  },
}

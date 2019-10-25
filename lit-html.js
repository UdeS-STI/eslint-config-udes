module.exports = {
  // Defines global variables that are predefined
  env: {
    // Browser global variables
    browser: true,
  },

  // Extends the UdeS ESLint config
  extends: ['./index.js'],

  // Parser (by default espree)
  parser: 'babel-eslint',

  // Supported JavaScript language options
  parserOptions: {
    // Enables ES2015 syntax
    ecmaVersion: 2015,

    // Code is in ECMAScript modules (default: script)
    sourceType: 'module',

    // Allow import and export declarations to appear anywhere (babel-eslint)
    allowImportExportEverywhere: true,
  },

  // Plugins
  plugins: [
    // Allows linting and fixing inline scripts contained in HTML files
    'eslint-plugin-html',

    // Add new rules for lit-html projects
    'eslint-plugin-lit',
  ],

  // Custom rules
  rules: {
    // Disallows unencoded HTML entities in attribute values | > | &gt;
    'lit/attribute-value-entities': 'off',

    // Disallows invalid binding positions in templates | <x-foo ${expr}="bar">
    'lit/binding-positions': 'error',

    // Disallows duplicate names in template bindings | <x-foo bar bar>
    'lit/no-duplicate-template-bindings': 'error',

    // Disallows invalid escape sequences in template strings | foo \2c bar | foo \\2c bar
    'lit/no-invalid-escape-sequences': 'error',

    // Disallows invalid HTML in templates | <x-foo invalid"attribute></x-foo>
    'lit/no-invalid-html': 'error',

    // Detects usages of legacy binding syntax | <x-foo on-bar=${x}> | <x-foo bar$=${x}>
    'lit/no-legacy-template-syntax': 'error',

    // Disallows usages of "non-public" property bindings | <x-foo .__bar=${x}></x-foo>
    'lit/no-private-properties': 'error',

    // Disallows property changes in the update lifecycle method
    'lit/no-property-change-update': 'error',

    // Disallows arrow functions in templates
    'lit/no-template-arrow': 'error',

    // Disallows .bind in templates
    'lit/no-template-bind': 'error',

    // Disallows array .map in templates
    'lit/no-template-map': 'off',

    // Disallows redundant literal values in templates
    'lit/no-useless-template-literals': 'error',

    // Detects usages of the value attribute
    'lit/no-value-attribute': 'error', // What?
  },
};

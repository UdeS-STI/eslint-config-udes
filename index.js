module.exports = {
  extends: ['standard'],
  parserOptions: {
    // Enables ES6/ES2015 syntax
    ecmaVersion: 6,
  },
  env: {
    browser: true,
    // Enable new ES6 globals, such as Set
    es6: true,
    node: true,
  },
  plugins: [
    'html',
    'json',
  ],
  rules: {
    'max-len': ['error', 120],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'warn',
    'require-jsdoc': [
      'error', {
        'require': {
          'FunctionDeclaration': true,
          'MethodDefinition': false,
          'ClassDeclaration': true,
        },
      },
    ],
    'valid-jsdoc': ['error', {requireReturn: false}],
    'new-cap': [
      'error', {
        capIsNewExceptions: ['Polymer'],
        capIsNewExceptionPattern: '^(UdeS|Polymer)',
      }],
  },
  globals: {
    UdeS: true,
    Polymer: true,
  },
}

module.exports = {
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    browser: true,
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

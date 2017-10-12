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
    'comma-dangle': ['error', 'always-multiline'],
    'require-jsdoc': [
      'error', {
        'require': {
          'FunctionDeclaration': true,
          'MethodDefinition': true,
          'ClassDeclaration': true,
        },
      }],
    'valid-jsdoc': 'error',
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

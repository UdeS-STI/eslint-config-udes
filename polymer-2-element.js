module.exports = {
  // Extends the UdeS ESLint config
  extends: [
    './polymer-2.js',
  ],

  // Custom rules
  rules: {
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
};

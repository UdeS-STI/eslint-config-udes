module.exports = {
  extends: ['standard'],
  
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
  
  // Variables that are accessed but not defined within the same file
  globals: {
    // UdeS components and global scoped variables
    UdeS: true,
    
    // UdeS components and global scoped variables (read-only)
    Polymer: false,
  },
}

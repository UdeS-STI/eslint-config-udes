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

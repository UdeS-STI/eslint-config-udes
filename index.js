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
    'comma-dangle': ['error', 'always-multiline'],
    
    // Enforce a maximum line length of 120 characters (instead of 80 from Standard) [See pull request #4]
    'max-len': ['error', 120],
    
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
    
    'valid-jsdoc': ['error', {
      // [See pull request #1]
      requireReturn: false
    }],
    
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

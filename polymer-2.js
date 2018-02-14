module.exports = {
  // Extends the UdeS ESLint config
  extends: [
    './index.js',
  ],

  // Defines global variables that are predefined
  env: {		   
    // Browser global variables		
    browser: true,
  },

  // Use of third-party plugins
  plugins: [
    // Allows linting and fixing inline scripts contained in HTML files
    'eslint-plugin-html',
  ],

  // Custom rules
  rules: {
    // Require constructor names to begin with a capital letter
    'new-cap': [
      'error', {
        // Allows specified uppercase-started function names to be called without the new operator
        capIsNewExceptions: ['Polymer'],

        // Allows any uppercase-started function names that match the specified regex pattern to be called without the
        // new operator
        capIsNewExceptionPattern: '^(UdeS|Polymer)',
      }],
  },

  // Variables that are accessed but not defined within the same file
  globals: {
    // UdeS components and global scoped variables
    UdeS: true,

    // Polymer components and global scoped variables
    Polymer: false,
  },
};

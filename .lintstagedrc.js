module.exports = {
  '*.{js,json,md}': (filenames) => `eslint --fix ${filenames.join(' ')}`,
  '*.{js,json,md,yml}': (filenames) => `prettier --write ${filenames.join(' ')}`,
};

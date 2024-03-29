# eslint-config-udes

[![npm](https://img.shields.io/npm/v/eslint-config-udes.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-udes)
[![Known Vulnerabilities](https://snyk.io/test/github/UdeS-STI/eslint-config-udes/badge.svg)](https://snyk.io/test/github/UdeS-STI/eslint-config-udes)
[![CircleCI](https://circleci.com/gh/UdeS-STI/eslint-config-udes.svg?style=svg)](https://circleci.com/gh/UdeS-STI/eslint-config-udes)

ESLint shareable config for the UdeS JavaScript style guide.

## Installation

```bash
npm install eslint-config-udes --save-dev
```

Our default export use some plugins that you need to install as well:

```bash
npm install prettier eslint-plugin-prettier eslint-plugin-json-format eslint-plugin-markdown --save-dev
```

## Usage (by default)

- Add the extends attribute to your `.eslintrc.js`:

```javascript
module.exports = {
  // Extends the UdeS ESLint config
  extends: 'eslint-config-udes',

  // Limit ESLint to a specific project
  root: true,
};
```

### Scripts

- Add the wanted scripts to your `package.json`:

```json
{
  "scripts": {
    "format": "npm run lint -- --fix",
    "lint": "eslint . --ext js,json,md"
  }
}
```

### Supported languages/frameworks

- If you use one of the supported language/framework, you should use the corresponding extends in your `.eslintrc.js`:

```javascript
module.exports = {
  // Extends the UdeS ESLint config for lit-html application
  extends: 'eslint-config-udes/lit-html',

  // Extends the UdeS ESLint config for Node.js 16 application
  extends: 'eslint-config-udes/node-16',

  // Extends the UdeS ESLint config for React application and element
  extends: 'eslint-config-udes/react',
};
```

#### Installation

As these configurations use other plugins, you may need to install additional devDependencies:

```bash
# lit-html
npm install babel-eslint eslint-plugin-html eslint-plugin-lit --save-dev

# React
npm install eslint-plugin-react --save-dev
```

## Publish

Increment the `version` defined in the `package.json` file and run the command below to publish the module in the
registry:

```bash
# Dry run
npm publish --dry-run

# For real (are you really sure?)
npm publish
```

## License

The [MIT License][1] (MIT)

[1]: https://opensource.org/licenses/MIT

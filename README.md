# eslint-config-udes

[![CircleCI](https://circleci.com/gh/UdeS-STI/eslint-config-udes.svg?style=svg)](https://circleci.com/gh/UdeS-STI/eslint-config-udes)
[![Greenkeeper badge](https://badges.greenkeeper.io/UdeS-STI/eslint-config-udes.svg)](https://greenkeeper.io/)
[![npm](https://img.shields.io/npm/v/eslint-config-udes.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-udes)

ESLint shareable config for the UdeS JavaScript style guide.

## Installation
```bash
$ npm install eslint-config-udes --save-dev
```

## Usage
- Add the extends attribute to your `.eslintrc.js`:

```javacript
module.exports = {
  // Extends the UdeS ESLint config
  extends: 'eslint-config-udes',
  
  // Limit ESLint to a specific project
  root: true,
}
```

- If you use one of the supported language/framework, you should use the corresponding extends:
```
  // Extends the UdeS ESLint config for Polymer 2 application
  extends: 'eslint-config-udes/polymer-2-application',
  
  // Extends the UdeS ESLint config for Polymer 2 element
  extends: 'eslint-config-udes/polymer-2-element',
  
  // Extends the UdeS ESLint config for Node.js 8 application
  extends: 'eslint-config-udes/node-8',
  
  // Extends the UdeS ESLint config for React application and element
  extends: 'eslint-config-udes/react',
```

- Add the wanted scripts to your `package.json`:

```json
{ 
  "scripts": {
    "format": "npm-run-all format:*",
    "format:js": "eslint . --ext js --fix",
    "format:json": "eslint . --ext json --fix",
    "format:markdown": "eslint . --ext md --fix",
    "lint": "npm-run-all lint:*",
    "lint:js": "eslint . --ext js",
    "lint:json": "eslint . --ext json",
    "lint:markdown": "eslint . --ext md"
  }
}
```

- If you use the `npm-run-all` module, don't forget to add it to your devDependencies:
```bash
npm install npm-run-all --save-dev
```

## License
The [MIT License][1] (MIT)

[1]: https://opensource.org/licenses/MIT

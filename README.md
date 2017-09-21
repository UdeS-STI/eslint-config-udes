# eslint-config-udes 
[![npm](https://img.shields.io/npm/v/eslint-config-udes.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-udes)

ESLint shareable config for the UdeS JavaScript style guide

## Installation
```bash
$ npm i -D eslint-config-udes
```

## Usage
- Add the extends attribute to your `.eslintrc.json`
```json
{
  "extends": "eslint-config-udes"
}
```
- Add the wanted scripts to your `package.json`
```json
{ 
  "scripts": {
    "format": "npm run format:js && npm run format:json",
    "format:js": "eslint . --ext js,html --ignore-path .gitignore --fix",
    "format:json": "eslint . --ext .json --ignore-path .gitignore --fix",
    "lint": "npm run lint:js && npm run lint:json && npm run lint:polymer",
    "lint:js": "eslint . --ext js,html --ignore-path .gitignore",
    "lint:json": "eslint . --ext .json --ignore-path .gitignore",
    "lint:polymer": "polymer lint"
  },
  "pre-commit": [
      "lint"
    ]
}
```

## License
The [MIT License][1] (MIT)

[1]: https://opensource.org/licenses/MIT
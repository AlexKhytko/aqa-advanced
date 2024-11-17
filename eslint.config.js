import globals from "globals";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "prettier",
      "plugin:prettier/recommended"
    ],
    "env": {
      "browser": true,
      "es6": true,
      "node": true
    },
    "parserOptions": {
      "ecmaVersion": 2020,
      "sourceType": "module"
    },
    "plugins": [
      "react",
      "prettier"
    ]
  }
  
];

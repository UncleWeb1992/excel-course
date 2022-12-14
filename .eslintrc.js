module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'semi': 0,
    'coma-dange': 0,
    'require-jsdoc': 0,
    'singlequote': 0,
    "linebreak-style": 0,
    'operator-linebreak': 0,
    'max-len': 0,
    'spaced-comment': 0,
  },
};

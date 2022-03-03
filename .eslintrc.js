module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
  },
  extends: ['google', 'prettier'],
  plugins: 'prettier',
  env: {
    node: true,
    es6: true,
  },
  rules: {
    allowArrowFunctions: true,
  },
};

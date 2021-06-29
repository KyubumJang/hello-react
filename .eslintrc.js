module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 1,
    'react/prop-types': 0,
    'no-undef': 0,
  },
  parser: 'babel-eslint',
};

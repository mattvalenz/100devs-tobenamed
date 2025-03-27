module.exports = {
  root: true,
  ignorePatterns: ['.next/**/*'],
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};

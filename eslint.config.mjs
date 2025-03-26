import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tsEslintParser from '@typescript-eslint/parser';

const filename = fileURLToPath(import.meta.url);
const directoryName = dirname(filename);

const compat = new FlatCompat({
  baseDirectory: directoryName,
});

const eslintConfig = [
  { ignores: ['.next/**/*'] },
  ...compat.extends('next/core-web-vitals', 'next', 'airbnb', 'airbnb-typescript'),
  {
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];

export default eslintConfig;

module.exports = [
  {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    env: {
      es6: true,
      node: true,
    },
    rules: {},
    ignores: [
      'node_modules',
      '**/node_modules',
      '!./packages/manual-add-lib/node_modules/local-lib.js',
    ],
  },
];

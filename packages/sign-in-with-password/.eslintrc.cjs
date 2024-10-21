/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: '@silverhand/eslint-config',
  rules: {
    'jsx-a11y/no-autofocus': 'off',
    'unicorn/prefer-string-replace-all': 'off',
    'no-restricted-syntax': 'off',
    '@silverhand/fp/no-mutation': 'off',
  },
  overrides: [
    {
      files: ['*.config.js', '*.config.ts', '*.d.ts'],
      rules: {
        'import/no-unused-modules': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-unassigned-import': 'off',
      },
    },
  ],
};

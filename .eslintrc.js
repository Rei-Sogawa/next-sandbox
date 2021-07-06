// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  plugins: ['@sonicgarden'],
  extends: [
    'plugin:@sonicgarden/browser',
    'plugin:@sonicgarden/recommended',
    'plugin:@sonicgarden/typescript',
    'plugin:@sonicgarden/react-typescript',
    'plugin:@sonicgarden/prettier',
    'plugin:@next/next/recommended',
  ],
  settings: {
    'import/internal-regex': '^@/',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
  },
  overrides: [
    {
      files: ['src/pages/**/*.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['src/lib/graphql/generated.ts'],
      rules: {
        'no-use-before-define': 'off',
        'no-prototype-builtins': 'off',
        'no-irregular-whitespace': 'off',
        'import/no-extraneous-dependencies': 'off',
        'eslint-comments/no-unused-disable': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
}

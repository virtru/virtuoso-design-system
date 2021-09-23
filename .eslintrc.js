module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  settings: {},
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/strict',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    'import/no-named-as-default': 'off', // https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default
    'import/prefer-default-export': 'off',
    'no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true,
        ignore: [-1, 0, 1, 2],
      },
    ],
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'prettier/prettier': ['error'],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        children: true,
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-fragments': 'error',
    // why? when developing reusable components which others will be expecting to build upon it helps reduce coding
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'react-hooks/exhaustive-deps': 'warn',
    'require-jsdoc': [
      'error',
      {
        require: {
          MethodDefinition: true,
        },
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'react/prop-types': 'off',
        'no-magic-numbers': 'off',
      },
    },
    {
      files: ['stories/**/*'],
      rules: {
        'no-magic-numbers': 'off',
      },
    },
  ],
};

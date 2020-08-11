module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/strict',
    'prettier',
    'prettier/react',
  ],
  env: {
    browser: true,
    node: true,
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    'prettier/prettier': ['error'],
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'react/jsx-filename-extension': 'off',
    'react/jsx-fragments': 'error',
    'require-jsdoc': [
      'error',
      {
        require: {
          MethodDefinition: true,
        },
      },
    ],
    'no-underscore-dangle': 'off',
    'import/no-named-as-default': 'off', // https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        children: true,
      },
    ],
    'no-magic-numbers': [
      'error',
      {
        ignoreArrayIndexes: true,
        ignore: [-1, 0, 1],
      },
    ],
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
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

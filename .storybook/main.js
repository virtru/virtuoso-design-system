const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)', '../stories/vrc-stories/**/*.js', '../lib/components/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    'storybook-design-token',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    './.storybook/addons/storybook-addon-abstract/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-viewport/register',
  ],
};

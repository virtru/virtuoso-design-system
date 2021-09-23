const path = require('path');

module.exports = {
  options: {
    order: ['Basics', 'Components', 'Antd']
  },
  stories: [
    // Make Introduction appear first in list of stories.
    '../stories/**/*.mdx',
    // Include  stories
    '../lib/components/**/*.stories.@(ts|tsx|jsx)',
    '../stories/components/**/*.@(js|mdx|ts|tsx)',
    // Include antd stories
    '../stories/antd/*.@(js|mdx|ts|tsx)',
    '../stories/antd/**/*.@(ts|tsx|jsx)',
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    'storybook-design-token',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-viewport/register',
  ],
};

const path = require('path');

module.exports = {
  stories: [
    // Make Introduction appear first in list of stories.
    '../stories/Intro.stories.mdx',
    // Load stories in JS format
    // Load stories in MDX format (@storybook/addon-docs)
    '../stories/**/*.stories.(js|mdx)',
    '../stories/vrc-stories/**/*.(ts|tsx|jsx)',
  ],
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

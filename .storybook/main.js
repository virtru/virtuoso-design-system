const path = require('path');

module.exports = {
  stories: [
    // Make Introduction appear first in list of stories.
    '../stories/Intro.stories.mdx',
    // Load stories in JS format
    // Load stories in MDX format (@storybook/addon-docs)
    '../stories/**/*.stories.(js|mdx)',
    // include stories from virtru-react-components
    '../stories/vrc-stories/*.(js|mdx)',
    '../lib/components/**/*.stories.(js|mdx)',
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

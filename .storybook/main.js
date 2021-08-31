const path = require('path');

module.exports = {
  stories: [
    // Make Introduction appear first in list of stories.
    '../stories/Intro.stories.@(js|mdx)',
    // // include antd stories
    '../stories/antd/*.@(js|mdx|ts|tsx)',
    '../stories/antd/**/*.@(ts|tsx|jsx)',
    // // include virtru stories
    '../stories/virtru/*.@(js|mdx|ts|tsx)',
    '../stories/virtru/**/*.@(ts|tsx|jsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    'storybook-design-token',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    path.resolve('./.storybook/addons/storybook-addon-abstract/register.js'),
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-viewport/register',
  ],
};

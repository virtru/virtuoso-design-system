const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js', '../stories/vrc-stories/*.js'],
  addons: [
    '@storybook/addon-actions', 
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    'storybook-addons-abstract/register',
  ],
};

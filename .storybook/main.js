module.exports = {
  stories: ['../stories/**/*.stories.js', '../stories/vrc-stories/*.js'],
  addons: [
    'storybook-design-token',
    '@storybook/addon-actions', 
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    'storybook-addons-abstract/register',
  ],
};

// ./storybook/manager.js

import { addons } from '@storybook/addons';
import virtuosoTheme from './virtuosoTheme';
addons.setConfig({
  showRoots: true,
  theme: virtuosoTheme,
  
  showPanel: true,
  panelPosition: 'bottom',
  selectedPanel: 'controls',

  initialActive: 'sidebar',
});
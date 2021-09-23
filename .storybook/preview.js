//.storybook/preview.js

import React from 'react';

import {
  addParameters,
  addDecorator,
} from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { themes } from '@storybook/theming';
import virtuosoTheme from './virtuosoTheme.js';

import 'loki/configure-react';

// Custom storybook styles
import styles from './styles.css';

// Virtuoso styles
import '../lib/styles';

// configure storybook-design-token
const cssReq = require.context('!!raw-loader!../lib/components', true, /.\.css$/);
const cssTokenFiles = cssReq
  .keys()
  .map(filename => ({ filename, content: cssReq(filename).default }));

addParameters({
  // configure storybook-design-token
  designToken: {
    files: {
      css: cssTokenFiles,
    }
  },
  docs: {
    // configure @storybook/theming
    theme: virtuosoTheme,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Design', ['Introduction', 'For Designers 🎨', 'For Engineers 🧰', 'Design Tokens', 'Stickersheets'], 'Components', ['*', 'Ant Design']],
      locales: 'en-US',
    },
    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedPanel: 'storybook/a11y/panel',
  }
});

addDecorator(withA11y);

addDecorator(Story => (
  <div className={styles.container}>
    <Story />
  </div>
));
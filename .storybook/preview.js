//.storybook/preview.js

import React from 'react';

import {
  addParameters,
  addDecorator,
} from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/theming';

import 'loki/configure-react';
import 'virtru-typography';

import styles from './styles.css';

// import design tokens so webpack and storybook-design-token render them
import tokens from '../components/tokens.css';

// configure storybook-design-token
const cssReq = require.context('!!raw-loader!../components', true, /.\.css$/);
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
  
  options: {
    // configure @storybook/theming
    theme: themes.dark,

    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedPanel: 'storybook/a11y/panel',
  },
});

addDecorator(withA11y);

addDecorator(Story => (
  <div className={styles.container}>
    <Story />
  </div>
));

addDecorator(withKnobs);
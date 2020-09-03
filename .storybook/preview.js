//.storybook/preview.js

import React from 'react';

import { addParameters, addDecorator } from '@storybook/react';

import 'loki/configure-react';

import styles from './styles.css';

// import design tokens so webpack and storybook-design-token render them
import manualTokens from '../lib/styles/tokens.css';
import builtTokens from '../lib/styles/build/css/design_tokens.css';

// configure storybook-design-token
const cssReq = require.context('!!raw-loader!../lib/components', true, /.\.css$/);
const cssTokenFiles = cssReq
  .keys()
  .map((filename) => ({ filename, content: cssReq(filename).default }));

export const decorators = [
  (Story) => (
    <div className={styles.container}>
      <Story />
    </div>
  ),
];

export const parameters = {
  // configure storybook-design-token
  designToken: {
    files: {
      css: cssTokenFiles,
    },
  },

  options: {
    // why? sort the stories https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
    storySort: {
      order: [
        'Intro',
        ['Introduction', 'Design Tokens'],
        'Library',
        ['Layout', 'Atoms', 'Molecules', 'Organisms'],
      ],
    },
  },
};

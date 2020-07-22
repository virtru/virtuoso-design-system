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

addParameters({
  options: {
    theme: themes.dark,
  },
});

addDecorator(Story => (
  <div className={styles.container}>
    <Story />
  </div>
));

addDecorator(withA11y);
addDecorator(withKnobs);
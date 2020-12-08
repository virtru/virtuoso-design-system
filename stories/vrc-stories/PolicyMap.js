/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import { PolicyMap } from '@';
import sampleGeoData from './assets/sampleGeoData.json';

const onCountryClick = (e) => {
  window.alert(JSON.stringify(e));
};

storiesOf('PolicyMap', module).lokiSkip('default', () => (
  <PolicyMap data={sampleGeoData} onClick={onCountryClick} />
));

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { PolicyMap } from '@';
import sampleGeoData from './assets/sampleGeoData.json';

const onCountryClick = (e) => {
  window.alert(JSON.stringify(e));
};

storiesOf('PolicyMap', module).lokiSkip('default', () => {
  const focusQuartile = select('Focus quartile', [0, 1, 2, 3, 4]);
  return <PolicyMap data={sampleGeoData} onClick={onCountryClick} focusQuartile={focusQuartile} />;
});

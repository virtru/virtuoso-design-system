/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { PolicyMap } from '@';
import sampleGeoData from './assets/sampleGeoIso2.json';

const onCountryClick = (e) => {
  window.alert(JSON.stringify(e));
};

storiesOf('PolicyMap', module).lokiSkip('default', () => {
  const [focus, setFocus] = useState(0);
  return (
    <PolicyMap
      data={sampleGeoData}
      onClick={onCountryClick}
      focusQuartile={focus}
      onFocusQuartile={setFocus}
    />
  );
});

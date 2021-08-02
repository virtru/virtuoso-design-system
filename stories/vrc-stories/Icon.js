/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Icon } from '@';

storiesOf('Icon', module).lokiSkip('default', () => {
  const iconName = text('Icon name', Icon.NAMES.PDF);

  return <Icon name={iconName} />;
});

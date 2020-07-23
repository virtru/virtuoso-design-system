import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .addParameters({
    abstract: {
      // Copy a collection or layer share url from Abstract
      url: 'https://share.goabstract.com/b97555e2-2cd2-4a35-b1b8-cd5e3a85c243',
    },
  })
  // Name your stories after layers in the collection
  .add('Button/.Text/.Primary/Large/Disabled', () => <Button>from Abstract</Button>, {
    abstract: {
      layerId: '0c307f64-f517-4ed5-935c-0ad17492e17f',
    },
  });

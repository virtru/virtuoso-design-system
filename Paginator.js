/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';

import { Paginator } from '../lib';

const renderVariant = (name, children) => (
  <div style={{ marginBottom: 20 }}>
    <h3>{name}</h3>
    {children}
  </div>
);

storiesOf('Paginator', module)
  .lokiSkip('default', () => (
    <Paginator
      min={number('Minimum items', 1)}
      total={number('Total items', 89)}
      start={number('Items start', 1)}
      end={number('Items end', 25)}
    >
      {text('Text', '1 - 25  of  89')}
    </Paginator>
  ))
  .add('variants', () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {renderVariant('Empty text', <Paginator total={10} start={2} end={3} />)}
      {renderVariant(
        'Left disabled',
        <Paginator total={10} start={1} end={5}>
          1 - 5 of 10
        </Paginator>,
      )}
      {renderVariant(
        'Right disabled',
        <Paginator total={10} start={5} end={10}>
          5 - 10 of 10
        </Paginator>,
      )}
      {renderVariant(
        'Both disabled',
        <Paginator total={10} start={1} end={10}>
          1 - 10 of 10
        </Paginator>,
      )}
    </div>
  ));

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { ToggleButton } from '@';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

const printTable = () => (
  <table>
    <thead>
      <tr>
        <th />
        <th>Enabled</th>
        <th>Disabled</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Checked</th>
        <td>
          <ToggleButton checked disabled={false} />
        </td>
        <td>
          <ToggleButton checked disabled />
        </td>
      </tr>
      <tr>
        <th>Unchecked</th>
        <td>
          <ToggleButton checked={false} disabled={false} />
        </td>
        <td>
          <ToggleButton checked={false} disabled />
        </td>
      </tr>
    </tbody>
  </table>
);

storiesOf('ToggleButton', module)
  .lokiSkip('default', () => (
    <Container>
      <ToggleButton checked={boolean('Checked', false)} disabled={boolean('Disabled', false)} />
    </Container>
  ))
  .add('matrix', () => printTable());

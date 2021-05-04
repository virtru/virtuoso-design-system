/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './assets/icon.svg';

import { Button } from '@';

const printButtonTable = (size, children = 'Label') => (
  <table>
    <thead>
      <tr>
        <th />
        <th>Enabled</th>
        <th>Disabled</th>
        <th>Danger</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Primary</th>
        <td>
          <Button variant={Button.VARIANT.PRIMARY} size={size}>
            {children}
          </Button>
        </td>
        <td>
          <Button variant={Button.VARIANT.PRIMARY} size={size} disabled>
            {children}
          </Button>
        </td>
        <td>
          <Button variant={Button.VARIANT.PRIMARY} size={size} danger>
            {children}
          </Button>
        </td>
      </tr>
      <tr>
        <th>Secondary</th>
        <td>
          <Button variant={Button.VARIANT.SECONDARY} size={size}>
            {children}
          </Button>
        </td>
        <td>
          <Button variant={Button.VARIANT.SECONDARY} size={size} disabled>
            {children}
          </Button>
        </td>
        <td>
          <Button variant={Button.VARIANT.SECONDARY} size={size} danger>
            {children}
          </Button>
        </td>
      </tr>
      <tr>
        <th>Not Outlined</th>
        <td>
          <Button variant={Button.VARIANT.NO_OUTLINE} size={size}>
            {children}
          </Button>
        </td>
        <td>
          <Button variant={Button.VARIANT.NO_OUTLINE} size={size} disabled>
            {children}
          </Button>
        </td>
        <td>
          <Button variant={Button.VARIANT.NO_OUTLINE} size={size} danger>
            {children}
          </Button>
        </td>
      </tr>
    </tbody>
  </table>
);

storiesOf('Button', module)
  .addParameters(
    {
      abstract: {
        shareId: 'b97555e2-2cd2-4a35-b1b8-cd5e3a85c243',
      },
    },
    { loki: { skip: true } },
  )
  .add('large', () => printButtonTable(Button.SIZE.LARGE))
  .add('medium', () => printButtonTable(Button.SIZE.MEDIUM))
  .add('small', () => printButtonTable(Button.SIZE.SMALL))
  .add('number', () => printButtonTable(Button.SIZE.SQUARE, '1'))
  .add('square', () => printButtonTable(Button.SIZE.SQUARE, <Icon />));

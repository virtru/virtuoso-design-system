/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import Icon from './assets/icon.svg';

import { Button } from '@';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

const variants = Object.values(Button.VARIANT);
const sizes = Object.values(Button.SIZE);
const defaultVariant = Button.VARIANT.SECONDARY;
const defaultSize = Button.SIZE.MEDIUM;

const printButtonTable = (size, children = 'Label') => (
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
      </tr>
      <tr>
        <th>Warning</th>
        <td>
          <Button variant={Button.VARIANT.WARNING} size={size}>
            {children}
          </Button>
        </td>
        <td>
          <Button variant={Button.VARIANT.WARNING} size={size} disabled>
            {children}
          </Button>
        </td>
      </tr>
    </tbody>
  </table>
);

storiesOf('Button', module)
  .addParameters({
    abstract: {
      shareId: 'b97555e2-2cd2-4a35-b1b8-cd5e3a85c243',
    },
  })
  .lokiSkip('default', () => (
    <Container>
      <Button
        variant={select('Variant', variants, defaultVariant)}
        size={select('Size', sizes, defaultSize)}
        disabled={boolean('Disabled')}
        fullWidth={boolean('Full Width')}
      >
        {text('Button label', 'Label')}
      </Button>
    </Container>
  ))
  .lokiSkip('default with icon', () => (
    <Container>
      <Button
        variant={select('Variant', variants, defaultVariant)}
        size={select('Size', sizes, Button.SIZE.SQUARE)}
        disabled={boolean('Disabled')}
        fullWidth={boolean('Full Width')}
      >
        <Icon />
      </Button>
    </Container>
  ))
  .add('large', () => printButtonTable(Button.SIZE.LARGE))
  .add('medium', () => printButtonTable(Button.SIZE.MEDIUM))
  .add('small', () => printButtonTable(Button.SIZE.SMALL))
  .add('number', () => printButtonTable(Button.SIZE.SQUARE, '1'))
  .add('square', () => printButtonTable(Button.SIZE.SQUARE, <Icon />));

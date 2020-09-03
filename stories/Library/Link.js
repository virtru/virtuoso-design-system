/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import { Link } from '@';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: '1', fontSize: '18px' }}>
    {children}
  </div>
);

const variants = Object.values(Link.VARIANT);
const defaultVariant = Link.VARIANT.NORMAL;

const printLinkTable = (size, children = 'I am a Link') => (
  <table style={{ fontSize: '18px' }}>
    <tr>
      <th></th>
      <th>Normal</th>
      <th>Disabled</th>
    </tr>
    <tr>
      <th>Dark</th>
      <td>
        <Link href="/" variant={Link.VARIANT.NORMAL} size={size}>
          {children}
        </Link>
      </td>
      <td>
        <Link href="/" variant={Link.VARIANT.NORMAL} size={size} disabled>
          {children}
        </Link>
      </td>
    </tr>
    <tr style={{ backgroundColor: '#001E4A' }}>
      <th style={{ color: 'white' }}>Light</th>
      <td>
        <Link href="/" variant={Link.VARIANT.LIGHT} size={size}>
          {children}
        </Link>
      </td>
      <td>
        <Link href="/" variant={Link.VARIANT.LIGHT} size={size} disabled>
          {children}
        </Link>
      </td>
    </tr>
  </table>
);

storiesOf('Link', module)
  .lokiSkip('default', () => (
    <Container>
      <Link href="/" variant={select('Variant', variants, defaultVariant)}>
        {text('Link label', 'I am a Link')}
      </Link>
    </Container>
  ))
  .add('variants', () => printLinkTable());

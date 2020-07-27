/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Menu } from '@';

const { MenuItem } = Menu;

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '450px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

storiesOf('Menu', module).lokiSkip('default', () => (
  <Container>
    <Menu>
      <MenuItem>Hello</MenuItem>
      <MenuItem>World</MenuItem>
    </Menu>
  </Container>
))
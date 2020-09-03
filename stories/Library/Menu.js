/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Menu } from '@';

const { MenuItem } = Menu;

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '450px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

const MenuStory = ({ ...args }) => (
  <Container>
    <Menu {...args}>
      <MenuItem>Hello</MenuItem>
      <MenuItem>World</MenuItem>
    </Menu>
  </Container>
);

export const basic = MenuStory.bind({});

basic.args = {
  variant: Menu.VARIANT,
};
basic.story = {
  parameters: {
    loki: { skip: true },
  },
};

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { number, select } from '@storybook/addon-knobs';

import { Menu } from '@';

const { MenuItem } = Menu;

const component = ({ numberOfItems, ...props }) => {
  let width;
  let backgroundColor;
  if (props.variant === Menu.VARIANTS.VARIANT_NAV) {
    width = '100%';
    backgroundColor = '#001E4A';
  }

  return (
    <div style={{ width, display: 'flex', flexGrow: '1', backgroundColor }}>
      <Menu {...props}>
        {[...Array(numberOfItems).keys()].map((n) => (
          <MenuItem key={`menu-item-${n}`}>Menu Item {n}</MenuItem>
        ))}
      </Menu>
    </div>
  )
};

// storiesOf('Menu', module).lokiSkip('default', () => (
//   <Container>
//     <Menu>
//       <MenuItem>Hello</MenuItem>
//       <MenuItem>World</MenuItem>
//     </Menu>
//   </Container>
// ));

export default {
  title: 'Menu',
  parameters: {
    loki: {
      skip: true,
    },
  },
};

export const menu = () =>
  component({
    variant: select('variant', Menu.VARIANTS, Menu.VARIANTS_DEFAULT),
    numberOfItems: number('number of items', 3, { min: 0 }),
  });

export const nav = () => component();

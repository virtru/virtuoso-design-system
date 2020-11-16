/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { number, select } from '@storybook/addon-knobs';

import { Menu } from '@';

const { MenuItem } = Menu;

const NUMBER_OF_ITEMS = 3;

const component = (
  { numberOfItems = NUMBER_OF_ITEMS, ...props } = { numberOfItems: NUMBER_OF_ITEMS },
) => {
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
  );
};

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
    numberOfItems: number('number of items', NUMBER_OF_ITEMS, { min: 0 }),
  });

export const nav = () => component({ variant: Menu.VARIANTS.VARIANT_NAV });

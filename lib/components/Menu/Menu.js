import React from 'react';
import PropTypes from 'prop-types';
import { expandChildren } from '@/helpers';
import MenuItem from './MenuItem';

import styles from './styles/Menu.css';

export const VARIANT = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  NAV: 'nav',
};

/**
 * Menu component
 *
 * @param {*} param0.children Component children
 */
function Menu({ children }) {
  const [, { MenuItem: MenuItems }] = expandChildren(children, [MenuItem]);
  return <ul className={styles.container}>{MenuItems}</ul>;
}

Menu.displayName = 'Menu';

Menu.propTypes = {
  children: PropTypes.node,
};

Menu.defaultProps = {
  children: null,
};

export default Menu;

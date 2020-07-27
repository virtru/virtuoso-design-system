import React from 'react';
import { Link } from '@';
import { expandChildren } from '@/helpers';
import MenuItem from './MenuItem';

import styles from './styles/Menu.css';

function Menu({ children }) {
  const [nextChildren, { MenuItem: MenuItems }] = expandChildren(children, [MenuItem]);
  return <ul className={styles.container}>{MenuItems}</ul>;
}

export default Menu;

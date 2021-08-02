import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { choiceOfChoices, expandChildren } from '@/helpers';
import { VARIANTS, VARIANTS_DEFAULT, VARIANTS_LIST } from './constants';
import MenuItem from './MenuItem';

import styles from './Menu.css';

const getVariant = choiceOfChoices(VARIANTS_LIST, VARIANTS_DEFAULT);

/**
 * Menu component
 *
 * @param {*} param0.children Component children
 */
function Menu({ children, variant }) {
  const [, { MenuItem: MenuItems }] = expandChildren(children, [MenuItem]);
  return (
    <ul className={clsx(styles.container, styles[getVariant(variant)])}>
      {React.Children.map(MenuItems, (child) =>
        React.cloneElement(child, { ...child.props, variant }),
      )}
    </ul>
  );
}

Menu.displayName = 'Menu';

Menu.VARIANTS = VARIANTS;

Menu.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(VARIANTS_LIST),
};

Menu.defaultProps = {
  children: null,
  variant: VARIANTS_DEFAULT,
};

export default Menu;

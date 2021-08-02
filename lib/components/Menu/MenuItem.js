import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { choiceOfChoices } from '@/helpers';
import { VARIANTS_LIST, VARIANTS_DEFAULT } from './constants';
import styles from './MenuItem.css';

const getVariant = choiceOfChoices(VARIANTS_LIST, VARIANTS_DEFAULT);

/**
 * Menu item
 *
 * @param {object} param0 component props
 * @param {*} param0.children children
 * @param {string} param0.key component key
 */
function MenuItem({ children, variant }) {
  return <li className={clsx(styles.container, styles[getVariant(variant)])}>{children}</li>;
}

MenuItem.displayName = 'MenuItem';

MenuItem.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
};

MenuItem.defaultProps = {
  children: null,
  variant: VARIANTS_DEFAULT,
};

export default MenuItem;

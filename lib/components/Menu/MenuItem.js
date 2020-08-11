import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/MenuItem.css';

/**
 * Menu item
 *
 * @param {object} param0 component props
 * @param {*} param0.children children
 * @param {string} param0.key component key
 */
function MenuItem({ children, key }) {
  return (
    <li className={styles.container} key={key}>
      {children}
    </li>
  );
}

MenuItem.propTypes = {
  children: PropTypes.node,
  key: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  children: null,
};

export default MenuItem;

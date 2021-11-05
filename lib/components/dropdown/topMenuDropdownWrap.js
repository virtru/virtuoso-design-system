import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from '@';
import styles from './topMenuDropdownWrap.css';

const TopMenuDropdownWrap = ({ children, ...props }) => (
  <Menu {...props} className={styles.customMenuWrap}>
    {children}
  </Menu>
);

TopMenuDropdownWrap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TopMenuDropdownWrap;

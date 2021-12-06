/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { Menu as AntDMenu } from 'antd';
import styles from './navItem.css';

const NavItem = (props) => {
  const { children, loading } = props;
  return (
    <div className={loading ? styles.vdsNavItemLoading : styles.vdsNavItem}>
      <AntDMenu.Item icon {...props}>
        {children}
      </AntDMenu.Item>
    </div>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
};

NavItem.defaultProps = {
  children: null,
  loading: false,
};

export default NavItem;

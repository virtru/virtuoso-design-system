/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { Menu as AntDMenu } from 'antd';
import styles from './navigation.css';

const Navigation = (props) => {
  const { children } = props;
  return (
    <nav className={styles.vdsNavigation}>
      <AntDMenu mode="inline" {...props}>
        {children}
      </AntDMenu>
    </nav>
  );
};

Navigation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Navigation.defaultProps = {
  children: null,
};

export default Navigation;

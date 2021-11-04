import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Divider } from 'antd';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/logo';
import styles from './header.css';

const Header = ({ appName, alignRight, ...props }) => {
  const { children } = props;
  return (
    <Layout.Header {...props} className={styles.header}>
      <div className={styles.headerContainer}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <Divider type="vertical" className={styles.divider} />
        <NavLink to="/">
          <span className={styles.appName}>{appName}</span>
        </NavLink>
        <div className={cn(styles.headerContent, {[styles.alignRight]: alignRight})}>{children}</div>
      </div>
    </Layout.Header>
  );
};

Header.propTypes = {
  appName: PropTypes.string,
  alignRight: PropTypes.bool,
  children: PropTypes.node,
};

Header.defaultProps = {
  appName: '',
  alignRight: false,
  children: null,
};

export default Header;

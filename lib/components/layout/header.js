import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Layout, Divider } from 'antd';
import cn from 'classnames';
import { LogoVirtruIcon } from '@';
import styles from './header.css';

const Header = ({ appName, alignRight, homeUrl, children, ...props }) => {
  const goToHomePage = useCallback(
    (e) => {
      e.preventDefault();
      window.history.pushState(null, homeUrl, homeUrl);
    },
    [homeUrl],
  );

  return (
    <Layout.Header {...props} className={styles.header}>
      <div className={styles.headerContainer}>
        <a
          href={homeUrl}
          onClick={goToHomePage}
          className={styles.logoLink}
          title="Virtru"
          aria-label="Home page"
          tabIndex={0}
        >
          <LogoVirtruIcon className={styles.logo} />
        </a>
        <Divider type="vertical" className={styles.divider} />
        <a href={homeUrl} onClick={goToHomePage} className={styles.appNameLink}>
          <span className={styles.appName}>{appName}</span>
        </a>
        <div className={cn(styles.headerContent, { [styles.alignRight]: alignRight })}>
          {children}
        </div>
      </div>
    </Layout.Header>
  );
};

Header.propTypes = {
  appName: PropTypes.string,
  alignRight: PropTypes.bool,
  children: PropTypes.node,
  homeUrl: PropTypes.string,
};

Header.defaultProps = {
  appName: '',
  alignRight: false,
  children: null,
  homeUrl: '/',
};

export default Header;

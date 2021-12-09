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
    <Layout.Header {...props} className={styles.vdsHeader}>
      <div className={styles.vdsHeaderContainer}>
        <a
          href={homeUrl}
          onClick={goToHomePage}
          className={styles.vdsLogoLink}
          title="Virtru"
          aria-label="Home page"
          tabIndex={0}
        >
          <LogoVirtruIcon className={styles.vdsLogo} />
        </a>
        <Divider type="vertical" className={styles.vdsDivider} />
        <a href={homeUrl} onClick={goToHomePage} className={styles.vdsAppNameLink}>
          <span className={styles.vdsAppName}>{appName}</span>
        </a>
        <div className={cn(styles.vdsHeaderContent, { [styles.vdsAlignRight]: alignRight })}>
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

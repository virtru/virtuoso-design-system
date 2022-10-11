import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Layout, Divider, Typography } from 'antd';
import cn from 'classnames';
import { LogoVirtruIcon } from '@';
import styles from './header.css';

const { Title } = Typography;

const Header = ({ appName, alignRight, homeUrl, children, handleClickLogo, logo, ...props }) => {
  const goToHomePage = useCallback(
    (e) => {
      if (handleClickLogo) {
        handleClickLogo(e);
      } else {
        e.preventDefault();
        window.history.pushState(null, homeUrl, homeUrl);
      }
    },
    [handleClickLogo, homeUrl],
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
            {logo || (<LogoVirtruIcon className={styles.vdsLogo} />)}
        </a>
        <Divider type="vertical" className={styles.vdsDivider} />
        <Title className={styles.vdsTitle}>
          <a href={homeUrl} onClick={goToHomePage} className={styles.vdsAppNameLink}>
            <span className={styles.vdsAppName}>{appName}</span>
          </a>
        </Title>
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
  handleClickLogo: PropTypes.func,
  logo: PropTypes.node,
};

Header.defaultProps = {
  appName: '',
  alignRight: false,
  children: null,
  homeUrl: '/',
  handleClickLogo: null,
  logo: null,
};

export default Header;

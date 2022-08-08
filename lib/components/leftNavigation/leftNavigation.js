import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu as AntDMenu } from 'antd';
import styles from './leftNavigation.css';

const LeftNavigation = (props) => {
  const { children } = props;
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={styles.menuWrapper}>
      <AntDMenu
        className={styles.leftMenu}
        mode="inline"
        inlineCollapsed={collapsed}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        onFocus={() => setCollapsed(false)}
        onBlur={() => setCollapsed(true)}
        {...props}
      >
        {children}
      </AntDMenu>
    </div>
  );
};
LeftNavigation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

LeftNavigation.defaultProps = {
  children: null,
};

export default LeftNavigation;

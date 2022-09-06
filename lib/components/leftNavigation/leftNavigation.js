import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu as AntDMenu } from 'antd';
import cn from 'classnames';
import styles from './leftNavigation.css';

const LeftNavigation = (props) => {
  const { children, mobileAdaptive } = props;
  const [collapsed, setCollapsed] = useState(true);
  const [isFocusedAndHovered, setIsFocusedAndHovered] = useState(false);

  const openNavBar = () => {
    if (!collapsed) {
      setIsFocusedAndHovered(true);
    }
    setCollapsed(false);
  };
  const closeNavBar = () => {
    if (!isFocusedAndHovered) {
      setCollapsed(true);
    }
    setIsFocusedAndHovered(false);
  };

  return (
    <div className={cn(styles.menuWrapper, mobileAdaptive && styles.mobile)}>
      <AntDMenu
        className={styles.leftMenu}
        mode="inline"
        inlineCollapsed={collapsed}
        onMouseEnter={openNavBar}
        onMouseLeave={closeNavBar}
        onFocus={openNavBar}
        onBlur={closeNavBar}
        {...props}
      >
        {children}
      </AntDMenu>
    </div>
  );
};

LeftNavigation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  mobileAdaptive: PropTypes.bool,
};

LeftNavigation.defaultProps = {
  children: null,
  mobileAdaptive: false,
};

export default LeftNavigation;

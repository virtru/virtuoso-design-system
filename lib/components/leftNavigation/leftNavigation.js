import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Layout } from 'antd';
import cn from 'classnames';

import styles from './leftNavigation.css';

const LeftNavigation = ({ className, mobileAdaptive, items, ...props }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [isFocusedAndHovered, setIsFocusedAndHovered] = useState(false);

  const [mobileMode, setMobileMode] = useState(false);

  const openNavBar = useCallback(() => {
    if (mobileMode) {
      return;
    }

    if (!collapsed) {
      setIsFocusedAndHovered(true);
    }

    setCollapsed(false);
  }, [collapsed, mobileMode]);

  const closeNavBar = useCallback(() => {
    if (mobileMode) {
      return;
    }

    if (!isFocusedAndHovered) {
      setCollapsed(true);
    }

    setIsFocusedAndHovered(false);
  }, [isFocusedAndHovered, mobileMode]);

  const siderBreakpointHandler = useCallback(
    (broken) => {
      if (mobileAdaptive) {
        setMobileMode(broken);
      }
    },
    [mobileAdaptive],
  );

  return (
    <Layout.Sider
      className={cn(styles.sider, { [styles.mobile]: mobileMode }, className)}
      breakpoint="md"
      collapsed={collapsed && !mobileMode}
      collapsedWidth="var(--vds-left-navigation-width-collapsed)"
      collapsible={!mobileMode}
      defaultCollapsed
      theme={mobileMode ? 'dark' : 'light'}
      trigger={null}
      width={mobileMode ? '100%' : 'var(--vds-left-navigation-width)'}
      onMouseEnter={openNavBar}
      onMouseLeave={closeNavBar}
      onFocus={openNavBar}
      onBlur={closeNavBar}
      onBreakpoint={siderBreakpointHandler}
    >
      <Menu className={styles.leftMenu} mode="inline" {...props}>
        {items.map(({ label, ...item }) => (
          <Menu.Item {...item}>{label}</Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

LeftNavigation.propTypes = {
  className: PropTypes.string,
  mobileAdaptive: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      danger: PropTypes.bool,
      disabled: PropTypes.bool,
      icon: PropTypes.node,
      key: PropTypes.string,
      label: PropTypes.node,
      title: PropTypes.string,
    }),
  ).isRequired,
};

LeftNavigation.defaultProps = {
  className: undefined,
  mobileAdaptive: false,
};

export default LeftNavigation;

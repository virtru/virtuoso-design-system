import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Layout } from 'antd';
import cn from 'classnames';

import styles from './leftNavigation.css';

const LeftNavigation = ({ className, mobileAdaptive, items, ...props }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [isFocusedAndHovered, setIsFocusedAndHovered] = useState(false);

  const openNavBar = useCallback(() => {
    if (!collapsed) {
      setIsFocusedAndHovered(true);
    }

    setCollapsed(false);
  }, [collapsed]);

  const closeNavBar = useCallback(() => {
    if (!isFocusedAndHovered) {
      setCollapsed(true);
    }

    setIsFocusedAndHovered(false);
  }, [isFocusedAndHovered]);

  return (
    <Layout.Sider
      className={cn(styles.sider, className)}
      collapsed={collapsed}
      collapsedWidth="var(--vds-left-navigation-width-collapsed)"
      collapsible
      defaultCollapsed
      theme="light"
      trigger={null}
      width="var(--vds-left-navigation-width)"
      onMouseEnter={openNavBar}
      onMouseLeave={closeNavBar}
      onFocus={openNavBar}
      onBlur={closeNavBar}
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

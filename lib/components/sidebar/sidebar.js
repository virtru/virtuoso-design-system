import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as AntDrawer } from 'antd';
import Container from './container';
import styles from './sidebar.css';

const Sidebar = React.memo(
  ({ visibleDrawer, children, width, placement, onClose, closable, style }) => {
    return (
      <AntDrawer
        {...{
          className: styles.sidebarWrap,
          visible: visibleDrawer,
          closeIcon: null,
          width,
          placement,
          onClose,
          closable,
          style: {
            backgroundColor: 'var(--vds-color-slate-lightest)',
            ...style,
          },
        }}
      >
        <Container {...{ children }} />
      </AntDrawer>
    );
  },
);

Sidebar.propTypes = {
  visibleDrawer: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  width: PropTypes.number,
  placement: PropTypes.string,
  onClose: PropTypes.func,
  closable: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Sidebar.defaultProps = {
  width: 360,
  style: {},
  placement: 'right',
  closable: true,
  onClose: null,
};

export default Sidebar;

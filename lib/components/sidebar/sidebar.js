import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Drawer as AntDrawer } from 'antd';
import Container from './container';
import styles from './sidebar.css';

const Sidebar = React.memo(
  ({ visible, children, placement, onClose, closable, style, contentWrapperStyle }) => {
    const wrapStyle = useMemo(() => {
      return {
        backgroundColor: 'var(--vds-color-slate-lightest)',
        ...style,
      };
    }, [style]);

    return (
      <AntDrawer
        className={styles.sidebarWrap}
        visible={visible}
        closeIcon={null}
        placement={placement}
        onClose={onClose}
        closable={closable}
        style={wrapStyle}
        contentWrapperStyle={contentWrapperStyle}
      >
        <Container {...{ children }} />
      </AntDrawer>
    );
  },
);

Sidebar.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  placement: PropTypes.string,
  onClose: PropTypes.func,
  closable: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentWrapperStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Sidebar.defaultProps = {
  style: {},
  contentWrapperStyle: {},
  placement: 'right',
  closable: true,
  onClose: null,
};

export default Sidebar;

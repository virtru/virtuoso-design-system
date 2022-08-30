import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as AntDrawer } from 'antd';
import Container from './container';
import styles from './sidebar.css';

const Sidebar = React.memo(({ visibleDrawer, cardsData, drawerProps }) => {
  return (
    <AntDrawer
      {...{
        className: styles.sidebarWrap,
        visible: visibleDrawer,
        closeIcon: null,
        style: {
          backgroundColor: 'var(--vds-color-slate-lightest)',
        },
        ...drawerProps,
      }}
    >
      <Container {...{ cardsData }} />
    </AntDrawer>
  );
});

Sidebar.propTypes = {
  visibleDrawer: PropTypes.bool.isRequired,
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  drawerProps: PropTypes.shape({
    width: PropTypes.number,
    placement: PropTypes.string,
    onClose: PropTypes.func,
    closable: PropTypes.bool,
  }),
};

Sidebar.defaultProps = {
  drawerProps: {
    width: 360,
    style: { marginTop: '1px' },
    placement: 'right',
    closable: true,
  },
};

export default Sidebar;

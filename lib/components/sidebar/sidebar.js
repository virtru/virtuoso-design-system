import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as AntDrawer } from 'antd';
import Container from './container';
import styles from './sidebar.css';

const Sidebar = React.memo(({ visibleDrawer, cardsData, drawerProps }) => {
  return (
    <div className={styles.wrap}>
      <AntDrawer
        {...{
          className: 'sidebar-wrap',
          visible: visibleDrawer,
          closeIcon: null,
          style: {
            backgroundColor: 'var(--vds-color-slate-lightest)'
          },
          ...drawerProps,
        }}
      >
        <Container {...{ cardsData }} />
      </AntDrawer>
    </div>
  );
});

Sidebar.propTypes = {
  visibleDrawer: PropTypes.bool.isRequired,
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      extra: PropTypes.object,
      cover: PropTypes.object,
      bodyStyle: PropTypes.object,
    }),
  ).isRequired,
  drawerProps: PropTypes.shape({
    width: PropTypes.number,
    style: PropTypes.object,
    placement: PropTypes.string,
    onClose: PropTypes.func,
    closable: PropTypes.bool,
    closeIcon: PropTypes.object,
  }),
};

Sidebar.defaultProps = {
  cardsData: [],
  drawerProps: {
    width: 360,
    style: { marginTop: '1px' },
    placement: 'right',
    closable: true,
  },
};

export default Sidebar;

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Button } from 'antd';
import styles from './topMenuDropdown.css';
import { CustomIconArrow, CustomIconAvatar } from '@';

const TopMenuDropdown = ({ menu, activeUser }) => {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button ghost className={styles.vdsButton}>
        <CustomIconAvatar className={styles.vdsAvatarIcon} />
        {activeUser}
        <CustomIconArrow className={styles.vdsArrow} />
      </Button>
    </Dropdown>
  );
};

TopMenuDropdown.propTypes = {
  menu: PropTypes.node,
  activeUser: PropTypes.string,
};

TopMenuDropdown.defaultProps = {
  menu: null,
  activeUser: '',
};

export default TopMenuDropdown;

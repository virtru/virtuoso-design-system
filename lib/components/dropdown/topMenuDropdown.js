import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Button } from 'antd';
import styles from './topMenuDropdown.css';
import { CustomIconArrow, CustomIconAvatar } from '@';

const TopMenuDropdown = ({ menu, activeUser }) => {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button ghost className={styles.button}>
        <CustomIconAvatar className={styles.avatarIcon} />
        {activeUser}
        <CustomIconArrow className={styles.arrow} />
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

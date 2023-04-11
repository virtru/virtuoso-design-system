import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Button } from 'antd';
import styles from './topMenuDropdown.css';
import { CustomIconArrow, CustomIconAvatar } from '@';

const TopMenuDropdown = ({ menu, activeUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onVisibleChange = useCallback((visible) => {
    setIsOpen(visible);
  }, []);

  return (
    <Dropdown overlay={menu} trigger={['click']} onVisibleChange={onVisibleChange} tabIndex={0}>
      <Button ghost className={styles.vdsButton} aria-expanded={isOpen}>
        <CustomIconAvatar className={styles.vdsAvatarIcon} />
        <span className={styles.vdsUserName}>{activeUser}</span>
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

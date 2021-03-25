import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@';
import styles from './UserDropdown.css';

const UserDropdown = ({ handleDropdownClick, userId, isOpen, handleLogout, logoutText }) => {
  const chevronName = !isOpen ? Icon.NAMES.ARROW_UP : Icon.NAMES.ARROW_DOWN;
  return (
    <div className={styles.dropdownWrapper}>
      {isOpen && (
        <div className={styles.signoutWrapper}>
          <Button
            onClick={handleLogout}
            variant={Button.VARIANT.NO_OUTLINE}
            fullWidth
            data-testid="logout-btn"
          >
            <span className={styles.text}>{logoutText}</span>
          </Button>
        </div>
      )}
      <Button
        variant={Button.VARIANT.HEADER}
        onClick={handleDropdownClick}
        data-testid="dropdown-btn"
      >
        <span className={styles.iconWrapper}>
          <Icon name={Icon.NAMES.ACCOUNT_CIRCLE} />
        </span>
        <span className={styles.emailWrapper}>
          <span className={styles.email}>{userId}</span>
        </span>
        <Icon name={chevronName} />
      </Button>
    </div>
  );
};

UserDropdown.propTypes = {
  userId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleDropdownClick: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  logoutText: PropTypes.string,
};

UserDropdown.defaultProps = {
  logoutText: 'Sign out',
};

export default UserDropdown;

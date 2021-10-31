import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { ReactComponent as GoogleIcon } from './assets/google-icon.svg';
import { ReactComponent as OutlookIcon } from './assets/outlook-icon.svg';
import { ReactComponent as Office365Icon } from './assets/office365-icon.svg';
import styles from './oauthbutton.css';

const VARIANT = {
  GOOGLE: 'Google',
  OUTLOOK: 'Outlook',
  OFFICE365: 'Office365',
  OTHER: 'Other',
};

const ICONS = {
  [VARIANT.GOOGLE]: <GoogleIcon />,
  [VARIANT.OUTLOOK]: <OutlookIcon />,
  [VARIANT.OFFICE365]: <Office365Icon />,
  [VARIANT.OTHER]: null,
};

/**
 * Renders oauth button with an icon
 * @param children
 * @param variant
 * @param fullWidth
 * @param props
 * @returns {*}
 * @constructor
 */
const OauthButton = ({ children, variant, fullWidth, ...props }) => {
  return (
    <Button {...props} className={`${styles.oauthButton} ${fullWidth ? styles.fullWidth : ''}`}>
      {ICONS[variant] && <span className={styles.icon}>{ICONS[variant]}</span>}
      <span>{children}</span>
    </Button>
  );
};

OauthButton.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
};

OauthButton.defaultProps = {
  children: null,
  fullWidth: false,
};

export default Object.assign(OauthButton, { VARIANT });

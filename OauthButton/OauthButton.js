import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import GoogleIcon from './assets/google-icon.svg';
import OutlookIcon from './assets/outlook-icon.svg';
import Office365Icon from './assets/office365-icon.svg';
import styles from './OauthButton.css';

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
 * @param ref
 * @returns {*}
 * @constructor
 */
const OauthButton = forwardRef(({ children, variant, fullWidth, ...props }, ref) => {
  const classNames = cn(styles.oauthButton, { [styles.fullWidth]: fullWidth });

  return (
    <button type="button" {...props} className={classNames} ref={ref}>
      {ICONS[variant] && <span className={styles.icon}>{ICONS[variant]}</span>}
      <span>{children}</span>
    </button>
  );
});

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

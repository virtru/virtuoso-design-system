import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Button.css';

const VARIANT = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  WARNING: 'WARNING',
  NO_OUTLINE: 'NO_OUTLINE',
};

const SIZE = {
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
  SQUARE: 'SQUARE',
};

const variantClasses = {
  [VARIANT.PRIMARY]: styles.primary,
  [VARIANT.SECONDARY]: styles.secondary,
  [VARIANT.WARNING]: styles.warning,
  [VARIANT.NO_OUTLINE]: styles.noOutline,
};
const sizeClasses = {
  [SIZE.LARGE]: styles.large,
  [SIZE.MEDIUM]: styles.medium,
  [SIZE.SMALL]: styles.small,
  [SIZE.SQUARE]: styles.square,
};

/**
 * Renders a button
 * @param {Object} options
 * @prop {String} variant
 * @prop {String} size
 * @prop {Boolean} fullWidth
 * @param ref
 * @returns {*}
 * @constructor
 */
const Button = forwardRef(({ variant, size, fullWidth, children, ...buttonProps }, ref) => {
  const buttonClasses = cn(variantClasses[variant], sizeClasses[size], {
    [styles.fullWidth]: fullWidth,
  });

  return (
    // eslint-disable-next-line react/button-has-type, react/jsx-props-no-spreading
    <button ref={ref} className={buttonClasses} {...buttonProps}>
      {children}
    </button>
  );
});

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
  size: PropTypes.oneOf(Object.values(SIZE)).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
  fullWidth: false,
  children: null,
};

export default Object.assign(Button, { VARIANT, SIZE });

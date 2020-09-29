import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Button.css';

const VARIANT = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  NO_OUTLINE: 'NO_OUTLINE',
};

const SIZE = {
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
  SQUARE: 'SQUARE',
};

const SIZE_DEFAULT = SIZE.MEDIUM;

const variantClasses = {
  [VARIANT.PRIMARY]: styles.primary,
  [VARIANT.SECONDARY]: styles.secondary,
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
const Button = forwardRef(({ variant, size, fullWidth, danger, children, ...buttonProps }, ref) => {
  const buttonClasses = clsx(variantClasses[variant], sizeClasses[size], {
    [styles.fullWidth]: fullWidth,
    [styles.danger]: danger,
  });

  return (
    // eslint-disable-next-line react/button-has-type, react/jsx-props-no-spreading
    <button ref={ref} className={buttonClasses} {...buttonProps}>
      {children}
    </button>
  );
});

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
  danger: PropTypes.bool,
};

Button.defaultProps = {
  variant: VARIANT.PRIMARY,
  size: SIZE.MEDIUM,
  type: 'button',
  fullWidth: false,
  children: null,
  danger: false,
};

export default Object.assign(Button, { VARIANT, SIZE });

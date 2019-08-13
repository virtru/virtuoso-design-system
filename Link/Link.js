import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Link.css';

const VARIANT = {
  NORMAL: 'NORMAL',
  LIGHT: 'LIGHT',
};

const variantClasses = {
  [VARIANT.NORMAL]: styles.link,
  [VARIANT.LIGHT]: styles.linkLight,
};

/**
 * Renders a link
 * @param {Object} options
 * @prop {String} variant
 * @prop {String} size
 * @param ref
 * @returns {*}
 * @constructor
 */
const Link = forwardRef(({ variant, children, ...linkProps }, ref) => {
  const classes = cn(variantClasses[variant]);

  return (
    <a ref={ref} className={classes} {...linkProps}>
      {children}
    </a>
  );
});

Link.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)),
  children: PropTypes.node,
};

Link.defaultProps = {
  variant: 'NORMAL',
  children: null,
};

export default Object.assign(Link, { VARIANT });

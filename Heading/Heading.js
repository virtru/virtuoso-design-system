import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Heading.css';

const SIZE = {
  XLARGE: 'XLARGE',
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
  XSMALL: 'XSMALL',
  XXSMALL: 'XXSMALL',
};

// eslint-disable-next-line no-magic-numbers
const VALID_HEADING_RANKS = [1, 2, 3, 4, 5, 6];

const sizeStyles = {
  [SIZE.XLARGE]: styles.xlarge,
  [SIZE.LARGE]: styles.large,
  [SIZE.MEDIUM]: styles.medium,
  [SIZE.SMALL]: styles.small,
  [SIZE.XSMALL]: styles.xsmall,
  [SIZE.XXSMALL]: styles.xxsmall,
};

/**
 * @param {Object} props
 * @prop {Number} size
 * @prop {Number} rank A number from 1 to 6
 * @prop {Boolean} noMargin Indicates whether heading should have spacing (margin)
 * @prop {Node} children
 * @return {*}
 */
const Heading = ({ size, rank, children, color, noMargin, ...headingProps }) => {
  const sizeStyle = sizeStyles[size];
  const HTag = `h${rank}`;
  const className = cn(sizeStyle, { [styles.noMargin]: noMargin });

  return (
    <HTag className={className} style={{ color }} {...headingProps}>
      {children}
    </HTag>
  );
};

Heading.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)).isRequired,
  rank: PropTypes.oneOf(VALID_HEADING_RANKS).isRequired,
  color: PropTypes.string,
  noMargin: PropTypes.bool,
  children: PropTypes.node,
};

Heading.defaultProps = {
  children: null,
  color: null,
  noMargin: false,
};

export default Object.assign(Heading, { SIZE });

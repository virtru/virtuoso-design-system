import React from 'react';
import PropTypes from 'prop-types';

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
 * @prop {Node} children
 * @return {*}
 */
const Heading = ({ size, rank, children, ...headingProps }) => {
  const sizeStyle = sizeStyles[size];
  const HTag = `h${rank}`;

  return (
    <HTag className={sizeStyle} {...headingProps}>
      {children}
    </HTag>
  );
};

Heading.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)).isRequired,
  rank: PropTypes.oneOf(VALID_HEADING_RANKS).isRequired,
  children: PropTypes.node,
};

Heading.defaultProps = {
  children: null,
};

export default Object.assign(Heading, { SIZE });

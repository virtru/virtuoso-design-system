import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Chevron.css';

const VARIANT = {
  THIN: 'thin',
  THICK: 'thick',
  THICKER: 'thicker',
};

const DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down',
};

const Chevron = ({ variant, direction, ...props }) => (
  <span className={cn(styles[variant], styles[direction])} {...props} />
);

Chevron.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
  direction: PropTypes.oneOf(Object.values(DIRECTION)).isRequired,
};

export default Object.assign(Chevron, { VARIANT, DIRECTION });

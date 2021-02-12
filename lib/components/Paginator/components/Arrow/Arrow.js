import React from 'react';
import PropTypes from 'prop-types';

import styles from './Arrow.css';

const VARIANT = {
  LEFT: 'left',
  RIGHT: 'right',
};

const Arrow = ({ variant, ...props }) => (
  <button
    type="button"
    className={styles[variant]}
    data-testid={`VDS-arrow-${variant}`}
    {...props}
  />
);

Arrow.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
};

export default Object.assign(Arrow, { VARIANT });

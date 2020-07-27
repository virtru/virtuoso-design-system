import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cross.css';

const VARIANT = {
  SMALL: 'small',
  LARGE: 'large',
};

const Cross = ({ variant, color: backgroundColor }) => (
  <div className={styles[variant]}>
    <div className={styles.indicator}>
      <div className={styles.lineLeft} style={{ backgroundColor }} />
      <div className={styles.lineRight} style={{ backgroundColor }} />
    </div>
  </div>
);

Cross.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)),
  color: PropTypes.string,
};

Cross.defaultProps = {
  variant: VARIANT.SMALL,
  color: null,
};

export default Object.assign(Cross, { VARIANT });

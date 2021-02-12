import React from 'react';
import PropTypes from 'prop-types';

import Arrow from './components/Arrow/Arrow';

import styles from './Paginator.css';

const Paginator = ({ start, end, total, min, children, onPrevClick, onNextClick, ...props }) => (
  <div className={styles.paginator} {...props}>
    {children && (
      <div className={styles.children} data-testid="VDS-paginator-count">
        {' '}
        {children}
      </div>
    )}
    <div className={styles.arrows}>
      <Arrow variant={Arrow.VARIANT.LEFT} disabled={start <= min} onClick={onPrevClick} />
      <Arrow variant={Arrow.VARIANT.RIGHT} disabled={end >= total} onClick={onNextClick} />
    </div>
  </div>
);

Paginator.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  min: PropTypes.number,
  children: PropTypes.node,
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
};

Paginator.defaultProps = {
  min: 1,
  children: null,
  onPrevClick: () => {},
  onNextClick: () => {},
};

export default Paginator;

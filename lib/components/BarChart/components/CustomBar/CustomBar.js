import React from 'react';
import PropTypes from 'prop-types';

import styles from './CustomBar.css';

const BAR_OFFSET = -45;
const LABEL_OFFSET = 5;

const CustomBarComponent = ({ x, y, width, height, label }) => (
  <g transform="translate(0, 48)" className={styles.barContainer}>
    <rect className={styles.barEdges} x={x} y={y + BAR_OFFSET} width={5} height={height} />
    <rect className={styles.bar} x={x} y={y + BAR_OFFSET} width={width} height={height} />
    <text dx="-70" y={y + height / 2 + BAR_OFFSET + LABEL_OFFSET} className={styles.barLabel}>
      {label}
    </text>
  </g>
);

CustomBarComponent.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default CustomBarComponent;

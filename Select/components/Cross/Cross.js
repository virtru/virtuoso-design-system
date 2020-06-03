import React from 'react';

import styles from './Cross.css';

const Cross = () => (
  <div className={styles.indicator}>
    <div className={styles.lineLeft} />
    <div className={styles.lineRight} />
  </div>
);

export default Cross;

import React from 'react';
import { Link } from '@';

import styles from './styles/MenuItem.css';

function MenuItem({ children, key, ...linkProps }) {
  return (
    <li className={styles.container} key={key}>
      {children}
    </li>
  );
}

export default MenuItem;

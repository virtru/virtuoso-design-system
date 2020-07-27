import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { SORT_DESC, SORT_ASC, SORT_OFF } from './sort-constants';

import styles from './Sorter.css';

const Sorter = ({ direction }) => {
  const arrowUpClassNames = cn(styles.sortUp, {
    [styles.active]: direction === SORT_ASC,
  });

  const arrowDownClassNames = cn(styles.sortDown, {
    [styles.active]: direction === SORT_DESC,
  });

  return (
    <>
      <div className={arrowUpClassNames} />
      <div className={arrowDownClassNames} />
    </>
  );
};

Sorter.propTypes = {
  direction: PropTypes.oneOf([SORT_DESC, SORT_ASC, SORT_OFF]).isRequired,
};

export default Sorter;

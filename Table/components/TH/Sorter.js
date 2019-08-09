import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import {
  TBL_HEADER_SORT_ACTIVE,
  TBL_HEADER_SORT_DOWN,
  TBL_HEADER_SORT_UP,
} from '../../table-selectors'
import { SORT_DESC, SORT_ASC, SORT_OFF } from './sort-constants';

const Sorter = ({ direction }) => {
  const arrowUpClassNames = cn(
    TBL_HEADER_SORT_UP,
    styles.sortUp,
    {
      [styles.active]: direction === SORT_ASC,
      [TBL_HEADER_SORT_ACTIVE]: direction === SORT_ASC
    }
  );


  const arrowDownClassNames = cn(
    TBL_HEADER_SORT_DOWN,
    styles.sortDown,
    {
      [styles.active]: direction === SORT_DESC,
      [TBL_HEADER_SORT_ACTIVE]: direction === SORT_DESC
    }
  );

  return (
    <>
      <div className={arrowUpClassNames} />
      <div className={arrowDownClassNames} />
    </>
  );
}

Sorter.propTypes = {
  direction: PropTypes.oneOf([SORT_DESC, SORT_ASC, SORT_OFF]).isRequired,
};

export default Sorter;
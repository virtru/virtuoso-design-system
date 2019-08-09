import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Sorter from './Sorter'
import { TBL_HEADERS } from '../../table-selectors'
import { SORT_DESC, SORT_ASC, SORT_OFF } from './sort-constants';

import styles from './TH.css'

export const TEXT_ALIGNMENT = {
  LEFT: 'LEFT',
  CENTER: 'CENTER',
  RIGHT: 'RIGHT',
};

const TH = ({
  className,
  children,
  sorting,
  onClick,
  textAlignment,
  min,
  width,
  ...rest
}) => {
  const thClassNames = cn(TBL_HEADERS, styles.headerCell, className, {
    [styles.clickable]: sorting,
    [styles.min]: min,
    [styles.left]: textAlignment === TEXT_ALIGNMENT.LEFT,
    [styles.center]: textAlignment === TEXT_ALIGNMENT.CENTER,
    [styles.right]: textAlignment === TEXT_ALIGNMENT.RIGHT,
  });

  return (
    <th className={thClassNames} onClick={onClick} style={{ width }} {...rest}>
      {children}
      {sorting && (
        <div className={styles.sorter}>
          <Sorter direction={sorting} />
        </div>
      )}
    </th>
  )
}

TH.propTypes = {
  onClick: PropTypes.func,
  sorting: PropTypes.string,
  textAlignment: PropTypes.oneOf(Object.values(TEXT_ALIGNMENT)),
  children: PropTypes.node,
  min: PropTypes.bool,
  width: PropTypes.string,
};

TH.defaultProps = {
  onClick: () => {},
  sorting: '',
  textAlignment: TEXT_ALIGNMENT.LEFT,
  children: null,
  min: false,
  width: null,
};

TH.sortDirection = { SORT_DESC, SORT_ASC, SORT_OFF }

export default TH;

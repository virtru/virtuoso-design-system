import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { TBL_ROW } from '../../table-selectors'

import styles from './TR.css'

const VARIANT = {
  PLAIN: 'PLAIN',
  BORDERED: 'BORDERED',
  SELECTED: 'SELECTED',
};

const TR = ({ className, children, onClick, id, isCollapsed, focusable, variant }) => {
  const ref = useRef(null);

  //useCallback?
  const rowClickHandler = onClick ? () => {
    if (!focusable) {
      ref.current.blur();
    }
    onClick(event);
  } : undefined

  const classNames = cn(TBL_ROW, styles.dataRow, className, {
    [styles.collapsed]: isCollapsed,
    [styles.clickable]: onClick,
    [styles.dataRowBordered]: variant === VARIANT.BORDERED,
    [styles.selected]: variant === VARIANT.SELECTED,
  });
  
  return (
    <tr
      ref={ref}
      className={classNames}
      tabIndex={focusable ? "0" : undefined}
      onClick={rowClickHandler}
      data-id={id}
    >
      {children}
    </tr>
  )
}

TR.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  id: PropTypes.string,
  isCollapsed: PropTypes.bool,
  focusable: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(VARIANT)),
};

TR.defaultProps = {
  children: null,
  onClick: undefined,
  id: '',
  isCollapsed: false,
  focusable: false,
  variant: VARIANT.PLAIN,
};

TR.variant = VARIANT;

export default TR;
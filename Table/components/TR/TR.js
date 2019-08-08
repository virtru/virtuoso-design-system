import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { TBL_ROW } from '../../table-selectors'

import styles from './TR.css'

export const VARIANT = {
  PLAIN: 'PLAIN',
  BORDERED: 'BORDERED',
};

const TR = ({ children, onClick, id, isCollapsed, focusable, variant }) => {
  const ref = useRef(null);

  //useCallback?
  const rowClickHandler = () => {
    if (!focusable) {
      ref.current.blur();
    }
    onClick(event);
  }

  const classNames = cn(TBL_ROW, styles.dataRow, {
    [styles.collapsed]: isCollapsed,
    [styles.dataRowBordered]: variant === VARIANT.BORDERED,
  });
  
  return (
    <tr
      ref={ref}
      className={classNames}
      tabIndex="0"
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
  onClick: /* istanbul ignore next */ () => null,
  id: '',
  isCollapsed: false,
  focusable: false,
  variant: VARIANT.PLAIN,
};


export default TR;
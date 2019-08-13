import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './TR.css';

const VARIANT = {
  PLAIN: 'PLAIN',
  BORDERED: 'BORDERED',
};

const TR = ({
  className,
  children,
  onClick,
  id,
  isCollapsed,
  blurAfterClick,
  highlightOnHover,
  variant,
}) => {
  const ref = useRef(null);

  // useCallback?
  const rowClickHandler = onClick
    ? event => {
        if (blurAfterClick) {
          ref.current.blur();
        }
        onClick(event);
      }
    : undefined;

  const classNames = cn(styles.dataRow, className, {
    [styles.collapsed]: isCollapsed,
    [styles.highlight]: onClick || highlightOnHover,
    [styles.clickable]: onClick,
    [styles.dataRowBordered]: variant === VARIANT.BORDERED,
  });

  return (
    <tr
      ref={ref}
      className={classNames}
      tabIndex={onClick ? '0' : undefined}
      onClick={rowClickHandler}
      data-id={id}
    >
      {children}
    </tr>
  );
};

TR.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  id: PropTypes.string,
  isCollapsed: PropTypes.bool,
  highlightOnHover: PropTypes.bool,
  blurAfterClick: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(VARIANT)),
};

TR.defaultProps = {
  className: '',
  children: null,
  onClick: undefined,
  id: '',
  isCollapsed: false,
  blurAfterClick: false,
  highlightOnHover: false,
  variant: VARIANT.BORDERED,
};

TR.VARIANT = VARIANT;

export default TR;

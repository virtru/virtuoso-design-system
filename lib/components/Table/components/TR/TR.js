import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './TR.css';

const TR = forwardRef(
  (
    { className, children, onClick, id, isCollapsed, blurAfterClick, highlightOnHover, ...rest },
    forwardedRef,
  ) => {
    // TODO resolve the error: React Hook "useRef" is called conditionally. react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = forwardedRef || useRef();
    const rowClickHandler = onClick
      ? (event) => {
          if (blurAfterClick) {
            ref.current.blur();
          }
          onClick(event);
          event.preventDefault();
          event.stopPropagation();
        }
      : undefined;

    const classNames = cn(styles.dataRow, className, {
      [styles.collapsed]: isCollapsed,
      [styles.highlight]: onClick || highlightOnHover,
      [styles.clickable]: onClick,
    });

    return (
      <tr
        data-testid="VDS-table-row"
        ref={ref}
        className={classNames}
        tabIndex={onClick ? '0' : undefined}
        onClick={rowClickHandler}
        data-id={id}
        {...rest}
      >
        {children}
      </tr>
    );
  },
);

TR.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  id: PropTypes.string,
  isCollapsed: PropTypes.bool,
  highlightOnHover: PropTypes.bool,
  blurAfterClick: PropTypes.bool,
};

TR.defaultProps = {
  className: '',
  children: null,
  onClick: undefined,
  id: '',
  isCollapsed: false,
  blurAfterClick: false,
  highlightOnHover: false,
};

export default TR;

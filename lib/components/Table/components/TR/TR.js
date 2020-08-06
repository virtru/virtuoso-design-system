import React, { forwardRef, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './TR.css';
import { TABLE_STYLES, TableContext } from '../../Table';

const TR = forwardRef(
  (
    {
      className,
      children,
      onClick,
      id,
      isCollapsed,
      blurAfterClick,
      highlightOnHover,
      tableStyle,
      isSelected,
      isBordered,
      ...rest
    },
    forwardedRef,
  ) => {
    const ref = forwardedRef || useRef();
    const rowClickHandler = onClick
      ? event => {
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
      [styles.grey]: tableStyle === TABLE_STYLES.GREY,
      [styles.selected]: isSelected,
      [styles.bordered]: isBordered,
      [styles.highlight]: onClick || highlightOnHover,
      [styles.clickable]: onClick,
    });

    return (
      <tr
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

const WrappedTr = props => (
  <TableContext.Consumer>
    {value => <TR {...props} tableStyle={value}/>}
  </TableContext.Consumer>
);

TR.propTypes = {
  className: PropTypes.string,
  tableStyle: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  id: PropTypes.string,
  isCollapsed: PropTypes.bool,
  isBordered: PropTypes.bool,
  isSelected: PropTypes.bool,
  highlightOnHover: PropTypes.bool,
  blurAfterClick: PropTypes.bool,
};

TR.defaultProps = {
  className: '',
  tableStyle: '',
  children: null,
  onClick: undefined,
  id: '',
  isBordered: false,
  isCollapsed: false,
  isSelected: false,
  blurAfterClick: false,
  highlightOnHover: false,
};

export default WrappedTr;

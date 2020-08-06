import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Table.css';

const TABLE_STYLES = { GREY: 'grey', DEFAULT: 'default' };

const TableContext = React.createContext('default');

const Table = ({ children, className, isScrollableBody, tableStyle }) => (
  <TableContext.Provider value={tableStyle}>
    <table className={cn(
      className,
      styles.table,
      {
        [styles.scrollableBody]: isScrollableBody,
        [styles.grey]: tableStyle === TABLE_STYLES.GREY,
      }
    )}>
      {children}
    </table>
  </TableContext.Provider>
);

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tableStyle: PropTypes.string,
  isScrollableBody: PropTypes.bool,
};

Table.defaultProps = {
  children: null,
  className: '',
  tableStyle: TABLE_STYLES.DEFAULT,
  isScrollableBody: false,
};

export default Table;

export { default as TBody } from './components/TBody/TBody';
export { default as THead } from './components/THead/THead';
export { default as TH } from './components/TH/TH';
export { TableContext, TABLE_STYLES };

export { default as TR } from './components/TR/TR';
export { default as TD } from './components/TD/TD';

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Table.css';

const Table = ({ children, className, isScrollableBody }) => (
  <table
    className={cn(className, styles.table, { [styles.scrollableBody]: isScrollableBody })}
    data-testid="VDS-table"
  >
    {children}
  </table>
);

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isScrollableBody: PropTypes.bool,
};

Table.defaultProps = {
  children: null,
  className: '',
  isScrollableBody: false,
};

export default Table;

export { default as TBody } from './components/TBody/TBody';
export { default as THead } from './components/THead/THead';
export { default as TH } from './components/TH/TH';

export { default as TR } from './components/TR/TR';
export { default as TD } from './components/TD/TD';

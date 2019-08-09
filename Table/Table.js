import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { TBL, TBL_BODY } from './table-selectors'

import styles from './Table.css'

const Table = ({ children, isScrollableBody }) => (
  <table className={cn(TBL, styles.table, { [isScrollableBody]: styles.scrollableBody })}>
    {children}
  </table>
);

Table.propTypes = {
  children: PropTypes.node,
  isScrollableBody: PropTypes.bool,
};

Table.defaultProps = {
  children: null,
  isScrollableBody: false,
};

export default Table;

const TBody = ({children}) => <tbody className={TBL_BODY}>{children}</tbody>

export { default as THead } from './components/THead/THead';
export { TBody }
export { default as TH } from './components/TH/TH';

export { default as TR } from './components/TR/TR';
export { default as TD } from './components/TD/TD';
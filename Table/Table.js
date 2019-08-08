import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { TBL } from './table-selectors'

import styles from './Table.css'

const Table = ({ children, isScrollableBody }) => {
  return (
    <table className={cn(TBL, styles.table, { [isScrollableBody]: styles.scrollableBody })}>
      {children}
    </table>
  )
};

Table.propTypes = {
  children: PropTypes.node,
  isScrollableBody: PropTypes.bool,
};

Table.defaultProps = {
  children: null,
  isScrollableBody: false,
};

export default Table;

export { default as THead } from './components/THead/THead';
export { default as TH } from './components/TH/TH';

export { default as TR } from './components/TR/TR';
export { default as TD } from './components/TD/TD';
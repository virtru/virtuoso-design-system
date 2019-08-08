import React from 'react'
import PropTypes from 'prop-types'

import { TBL_HEAD } from '../../table-selectors'

import styles from './THead.css'

const THead = ({ children }) => (
  <thead className={TBL_HEAD}>
    <tr className={styles.headerRow}>{children}</tr>
  </thead>
)

THead.propTypes = {
  children: PropTypes.node,
};

THead.defaultProps = {
  children: null,
};

export default THead;
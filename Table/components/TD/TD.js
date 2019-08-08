import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { TBL_COLUMN } from '../../table-selectors'

import styles from './TD.css'

const TD = ({ children, className, textAlignment, ...rest }) => (
  <td className={cn(TBL_COLUMN, className, styles.dataCell)} {...rest}>
    {children}
  </td>
);

TD.propTypes = {
  children: PropTypes.node,
};

TD.defaultProps = {
  children: null,
};

export default TD;
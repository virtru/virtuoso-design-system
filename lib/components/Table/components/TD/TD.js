import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './TD.css';
import { TABLE_STYLES, TableContext } from '../../Table';

const TD = ({ children, className, tableStyle, ...rest }) => (
  <td className={cn(className, styles.dataCell, { [styles.grey]: tableStyle === TABLE_STYLES.GREY} )} {...rest}>
    {children}
  </td>
);

const WrappedTd = props => (
  <TableContext.Consumer>
    {value => <TD {...props} tableStyle={value}/>}
  </TableContext.Consumer>
);

TD.propTypes = {
  tableStyle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

TD.defaultProps = {
  tableStyle: '',
  className: '',
  children: null,
};

export default WrappedTd;

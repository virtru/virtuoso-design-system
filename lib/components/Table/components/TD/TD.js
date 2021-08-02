import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './TD.css';

const TD = ({ children, className, ...rest }) => (
  <td className={cn(className, styles.dataCell)} {...rest} data-testid="VDS-table-cell">
    {children}
  </td>
);

TD.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TD.defaultProps = {
  className: '',
  children: null,
};

export default TD;

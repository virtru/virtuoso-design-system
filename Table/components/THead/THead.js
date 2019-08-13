import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './THead.css';

const THead = ({ children, className, trClassName }) => (
  <thead className={className}>
    <tr className={cn(styles.headerRow, trClassName)}>{children}</tr>
  </thead>
);

THead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  trClassName: PropTypes.string,
};

THead.defaultProps = {
  children: null,
  className: '',
  trClassName: '',
};

export default THead;

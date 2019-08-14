import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './THead.css';

const THead = ({ children, className }) => (
  <thead className={cn(styles.headerRow, className)}>{children}</thead>
);

THead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

THead.defaultProps = {
  children: null,
  className: '',
};

export default THead;

import React from 'react';
import PropTypes from 'prop-types';

const THead = ({ children, className }) => <thead className={className}>{children}</thead>;

THead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

THead.defaultProps = {
  children: null,
  className: '',
};

export default THead;

import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowDown } from '../../assets/arrow_down_12.svg';

const CustomIconArrow = ({ className }) => <ArrowDown className={className} />;

CustomIconArrow.propTypes = {
  className: PropTypes.string,
};

CustomIconArrow.defaultProps = {
  className: '',
};

export default CustomIconArrow;

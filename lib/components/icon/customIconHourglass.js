import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Hourglass } from '../../assets/hourglass.svg';

const HourglassIcon = ({ className }) => <Hourglass className={className} />;

HourglassIcon.propTypes = {
  className: PropTypes.string,
};

HourglassIcon.defaultProps = {
  className: '',
};

export default HourglassIcon;

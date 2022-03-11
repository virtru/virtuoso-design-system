import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Watermark } from '../../assets/watermark.svg';

const WatermarkIcon = ({ className }) => <Watermark className={className} />;

WatermarkIcon.propTypes = {
  className: PropTypes.string,
};

WatermarkIcon.defaultProps = {
  className: '',
};

export default WatermarkIcon;

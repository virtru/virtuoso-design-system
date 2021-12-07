import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Attention } from '../../assets/attention-24.svg';

const AttentionIcon = ({ className }) => <Attention className={className} />;

AttentionIcon.propTypes = {
  className: PropTypes.string,
};

AttentionIcon.defaultProps = {
  className: '',
};

export default AttentionIcon;

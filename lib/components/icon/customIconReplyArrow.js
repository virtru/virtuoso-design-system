import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ReplyArrow } from '../../assets/reply-arrow.svg';

const ReplyArrowIcon = ({ className }) => <ReplyArrow className={className} />;

ReplyArrowIcon.propTypes = {
  className: PropTypes.string,
};

ReplyArrowIcon.defaultProps = {
  className: '',
};

export default ReplyArrowIcon;

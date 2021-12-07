import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Login } from '../../assets/logo.svg';

const LogoVirtruIcon = ({ className }) => <Login className={className} />;

LogoVirtruIcon.propTypes = {
  className: PropTypes.string,
};

LogoVirtruIcon.defaultProps = {
  className: '',
};

export default LogoVirtruIcon;

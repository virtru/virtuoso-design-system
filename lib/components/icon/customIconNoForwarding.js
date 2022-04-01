import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as NoForwarding } from '../../assets/no_forwarding.svg';

const NoForwardingIcon = ({ className }) => <NoForwarding className={className} />;

NoForwardingIcon.propTypes = {
  className: PropTypes.string,
};

NoForwardingIcon.defaultProps = {
  className: '',
};

export default NoForwardingIcon;

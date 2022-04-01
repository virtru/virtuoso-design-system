import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as PersistentProtection } from '../../assets/persistent-protection.svg';

const PersistentProtectionIcon = ({ className }) => <PersistentProtection className={className} />;

PersistentProtectionIcon.propTypes = {
  className: PropTypes.string,
};

PersistentProtectionIcon.defaultProps = {
  className: '',
};

export default PersistentProtectionIcon;

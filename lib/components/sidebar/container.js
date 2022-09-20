import React from 'react';
import PropTypes from 'prop-types';
import styles from './container.css';

const Container = ({ children }) => <div className={styles.wrapContainer}>{children}</div>;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Container;

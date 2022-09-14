import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import styles from './container.css';

const Container = ({ children }) => <div className={styles.wrapContainer}>{children}</div>;

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.objectOf(Card)).isRequired,
};

export default Container;

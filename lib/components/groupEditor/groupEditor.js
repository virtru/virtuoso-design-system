import React from 'react';
import PropTypes from "prop-types";
import styles from './groupEditor.css';

const GroupEditor = ({ children }) => {
  return <div className={styles.wrap}>{children}</div>;
};

GroupEditor.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GroupEditor;

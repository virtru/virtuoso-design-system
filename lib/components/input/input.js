import React from 'react';
import PropTypes from 'prop-types';
import { Input as AntDInput } from 'antd';

import { ReactComponent as ErrorIcon } from './assets/error.svg';
import { ReactComponent as InfoIcon } from './assets/info.svg';
import styles from './input.css';

const STATE = {
  ERROR: 'error',
  INFO: 'info',
};

/**
 * Renders input with error or info text
 * @param state
 * @param message
 * @param inputProps
 * @param ref
 * @returns {*}
 * @constructor
 */
const Input = ({ state, message, ...inputProps }) => {
  const isErrorState = state === STATE.ERROR;
  const isInfoState = state === STATE.INFO && message;

  return (
    <span className={styles.container}>
      <AntDInput
        {...inputProps}
        className={`${styles.input} ${isErrorState ? styles.error : ''}`}
      />
      {(isInfoState || isErrorState) && message && (
        <span className={`${styles.text} ${isErrorState ? styles.error : ''}`}>
          <span className={styles.icon}>{isInfoState ? <InfoIcon /> : <ErrorIcon />}</span>
          <span className={styles.description}>{message}</span>
        </span>
      )}
    </span>
  );
};

Input.propTypes = {
  state: PropTypes.oneOf(Object.values(STATE)),
  message: PropTypes.string,
};

Input.defaultProps = {
  state: null,
  message: '',
};

export default Object.assign(Input, { STATE });

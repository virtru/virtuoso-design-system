import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ErrorIcon from './assets/error-icon.svg';
import InfoIcon from './assets/info-icon.svg';
import styles from './Input.css';

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
const Input = ({ state, message, ...inputProps }, ref) => {
  const isErrorState = state === STATE.ERROR;
  const isInfoState = state === STATE.INFO && message;

  return (
    <span className={styles.container}>
      <input
        ref={ref}
        type="text"
        {...inputProps}
        className={cn(styles.input, { [styles.error]: isErrorState })}
      />
      {(isInfoState || isErrorState) && message && (
        <span className={cn(styles.text, { [styles.error]: isErrorState })}>
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

export default Object.assign(forwardRef(Input), { STATE });

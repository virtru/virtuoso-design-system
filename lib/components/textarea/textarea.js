import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import classnames from 'classnames';

import ErrorIcon from './error.svg';
import styles from './textarea.css';

const AntdTextarea = Input.TextArea;

const Textarea = ({ disabled, error, label, message, value, onChange, rows, ...textareaProps }) => {
  const labelClass = classnames(styles.label, {
    [styles.errorText]: !disabled && error,
    [styles.disabled]: disabled,
  });

  const textareaClass = classnames(styles.textarea, {
    [styles.default]: !disabled && !error,
    [styles.disabled]: disabled,
    [styles.error]: !disabled && error,
  });

  const hintMessageClass = classnames(styles.message, {
    [styles.hint]: !disabled && !error,
    [styles.disabled]: disabled,
    [styles.errorText]: !disabled && error,
  });

  return (
    <div className={styles.container}>
      {label && <h2 className={labelClass}>{label}</h2>}
      <AntdTextarea
        className={textareaClass}
        disabled={disabled}
        value={value}
        onChange={onChange}
        autoSize={{ minRows: rows, maxRows: rows }}
        {...textareaProps}
      />
      {message && (
        <span className={hintMessageClass}>
          {!disabled && error && <ErrorIcon />} {message}
        </span>
      )}
    </div>
  );
};

Textarea.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  label: undefined,
  disabled: false,
  error: false,
  message: undefined,
  value: undefined,
  onChange: undefined,
  rows: 3,
};

export default Textarea;

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './error.css';
import AttentionIcon from '../Icon/AttentionIcon';

const TableError = (props) => {
  const { onClick, variant } = props;
  if (variant === 'error') {
    return (
      <div className={styles.paddingWrapper}>
        <div className={styles.errorMessageWrapper}>
          <span className={styles.attentionIcon}>
            <AttentionIcon />
          </span>
          <span data-testid="audit-try-again-msg" className={styles.errorMessage}>
            We couldn’t load Virtru activity.
          </span>
          <span data-testid="audit-try-again-btn" onClick={onClick} className={styles.underline}>
            Try again.
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.paddingWrapper}>
      <div className={styles.errorMessageWrapper}>
        <span className={styles.attentionIcon} />
        <span data-testid="audit-try-again-msg">We didn't find any Virtru activity.</span>
        <span>
          Encrypt or decrypt something and{' '}
          <span data-testid="audit-try-again-btn" onClick={onClick} className={styles.underline}>
            try again
          </span>
          .
        </span>
      </div>
    </div>
  );
};

TableError.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};

TableError.defaultProps = {
  variant: 'error',
};

export default TableError;

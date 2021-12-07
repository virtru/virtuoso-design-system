/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './error.css';
import AttentionIcon from '../icon/AttentionIcon';

const VARIANT = {
  ERROR: 'ERROR',
  NO_DATA: 'NO_DATA',
};

const TableError = (props) => {
  const { onClick, variant } = props;
  let additionalWrapper = styles.noDataWrapper;
  let icon;
  let content = (
    <>
      <span data-testid="audit-try-again-msg">We didn't find any Virtru activity.</span>
      <span>
        Encrypt or decrypt something and{' '}
        <span data-testid="audit-try-again-btn" onClick={onClick} className={styles.underline}>
          try again
        </span>
        .
      </span>
    </>
  );

  if (variant === VARIANT.ERROR) {
    additionalWrapper = styles.errorWrapper;
    icon = <AttentionIcon />;
    content = (
      <>
        <span data-testid="audit-try-again-msg" className={styles.errorMessage}>
          We couldn’t load Virtru activity.
        </span>
        <span data-testid="audit-try-again-btn" onClick={onClick} className={styles.underline}>
          Try again.
        </span>
      </>
    );
  }

  return (
    <div className={styles.paddingWrapper}>
      <div className={cn(styles.messageWrapper, additionalWrapper)}>
        <span className={styles.attentionIcon}>{icon}</span>
        {content}
      </div>
    </div>
  );
};

TableError.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.values(VARIANT)),
};

TableError.defaultProps = {
  variant: VARIANT.ERROR,
};

export default Object.assign(TableError, { VARIANT });

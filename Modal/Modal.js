import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Modal.css';

const SIZE = {
  FIT_CONTENT: 'FIT_CONTENT',
  SMALL: 'SMALL',
};

const sizeClasses = {
  [SIZE.FIT_CONTENT]: styles.fitContent,
  [SIZE.SMALL]: styles.small,
};

const Modal = ({ title, children, footer, size }) => {
  const modalClasses = cn(sizeClasses[size], styles.container);

  return (
    <div className={styles.overlay}>
      <div className={modalClasses}>
        <div className={styles.title}>{title}</div>
        {children && <div className={styles.content}>{children}</div>}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  footer: PropTypes.node,
  size: PropTypes.oneOf(Object.values(SIZE)),
};

Modal.defaultProps = {
  children: null,
  footer: null,
  size: SIZE.FIT_CONTENT,
};

export default Object.assign(Modal, { SIZE });

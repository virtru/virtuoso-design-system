import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.css';
import usePortal from '../../helpers/usePortal';

const Modal = ({ title, children, footer }) =>
  usePortal(
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        {children && <div className={styles.content}>{children}</div>}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>,
  );

Modal.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  footer: PropTypes.node,
};

Modal.defaultProps = {
  children: null,
  footer: null,
};

export default Modal;

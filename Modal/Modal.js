import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.css';
import usePortal from '../../helpers/usePortal';

/**
 * Enum for modal variants
 * @enum {Variant}
 */
export const VARIANT = {
  SMALL: 'small',
  LARGE: 'large',
};

const Modal = ({ title, children, footer, variant, ...props }) =>
  usePortal(
    <div className={styles.overlay}>
      <div className={variant === VARIANT.LARGE ? styles.large : styles.small}>
        <div className={styles.header}>
          <div className={styles.title}> {title} </div>
          <div>
            {props.showCloseButton ? (
              <button type="button" className={styles.closeButton} onClick={props.onRequestClose}>
                {'✕'}
              </button>
            ) : null}
          </div>
        </div>
        {children && <div className={styles.content}>{children}</div>}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </div>,
  );

Modal.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  footer: PropTypes.node,
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
  showCloseButton: PropTypes.bool,
};

Modal.defaultProps = {
  children: null,
  footer: null,
  showCloseButton: true,
  onRequestClose: () => null,
};

export default Modal;

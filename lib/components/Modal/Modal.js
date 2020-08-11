import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.css';
import { usePortal } from '@/helpers';
import clsx from 'clsx';

/**
 * Enum for modal variants
 * @enum {Variant}
 */
export const VARIANT = {
  SMALL: 'small',
  LARGE: 'large',
};

export const HEADER_THEME = {
  DARK: 'headerDark',
  LIGHT: 'headerLight'
};

const Modal = ({ title, children, footer, variant, onRequestClose, showCloseButton, headerTheme, ...props }) => {
  return usePortal(
    <div className={styles.overlay}>
      <div className={variant === VARIANT.LARGE ? styles.large : styles.small} {...props}>
        <div className={clsx(styles.header, styles[headerTheme])}>
          <div className={styles.title}>{title}</div>
          <div>
            {showCloseButton ? (
              <button type="button" className={styles.closeButton} onClick={onRequestClose}>
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
};


Modal.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  footer: PropTypes.node,
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
  headerTheme: PropTypes.oneOf(Object.values(HEADER_THEME)).isRequired,
  showCloseButton: PropTypes.bool,
};

Modal.defaultProps = {
  children: null,
  footer: null,
  headerTheme: HEADER_THEME.LIGHT,
  showCloseButton: false,
  onRequestClose: () => null,
};

export default Object.assign(Modal,
  Object.assign({ VARIANT }, { HEADER_THEME }));

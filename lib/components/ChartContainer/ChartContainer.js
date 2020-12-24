import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { usePortal } from '@/helpers';

import styles from './ChartContainer.css';

/**
 * Enum for ChartContainer variants
 * @enum {Variant}
 */
export const VARIANT = {
  SMALL: 'small',
  LARGE: 'large',
};

export const HEADER_THEME = {
  DARK: 'headerDark',
  LIGHT: 'headerLight',
};

export const TITLE_ICON = {
  INFO: 'InfoIcon',
};

const ChartContainer = ({
  title,
  children,
  footer,
  variant,
  onRequestClose,
  showCloseButton,
  headerTheme,
  titleIcon,
  ...props
}) => {
  return usePortal(
    <div className={styles.overlay}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <div className={styles.large} {...props}>
        <div className={clsx(styles.header, styles[headerTheme])}>
          <div className={styles.title}>
            <div className={styles.titleText}>{title}</div>
          </div>
          <div>
            {showCloseButton ? (
              <button type="button" className={styles.closeButton} onClick={onRequestClose}>
                ✕
              </button>
            ) : null}
          </div>
        </div>
        <div className={styles.body}>
          {children && <div className={styles.content}>{children}</div>}
          {footer && <div className={styles.footer}>{footer}</div>}
        </div>
      </div>
    </div>,
  );
};

ChartContainer.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  showGearButton: PropTypes.bool,
  showBackButton: PropTypes.bool,
  showSelect: PropTypes.bool,
  onGearClick: PropTypes.func,
  onBackClick: PropTypes.func,
  onSelectClick: PropTypes.bool,
};

ChartContainer.defaultProps = {
  showGearButton: false,
  showBackButton: false,
  showSelect: false,
  onGearClick: {},
  onBackClick: {},
  onSelectClick: {},
};

export default ChartContainer;

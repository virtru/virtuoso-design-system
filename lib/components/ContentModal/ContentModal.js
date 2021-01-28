import React from 'react';
import PropTypes from 'prop-types';
import { usePortal } from '@/helpers';

import Chevron from '@/components/Chevron/Chevron';
import styles from './ContentModal.css';

const ContentModal = ({ header, title, subtitle, children, onRequestClose, onRequestBack }) => {
  return usePortal(
    <div className={styles.overlay}>
      <div className={styles.large}>
        <div className={styles.headerOuter}>
          <div className={styles.backButton}>
            <button
              type="button"
              className={styles.headerButton}
              disabled={false}
              onClick={onRequestBack}
            >
              <Chevron variant={Chevron.VARIANT.THICKER} direction={Chevron.DIRECTION.LEFT} />
            </button>
          </div>
          <div className={styles.headerInner}> {header} </div>
          <div>
            {onRequestClose && (
              <button type="button" className={styles.headerButton} onClick={onRequestClose}>
                ✕
              </button>
            )}
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            {title && (
              <div className={styles.title}>
                {title.key && <div className={styles.titleKey}> {title.key}:&nbsp;</div>}
                <div className={styles.titleValue}> {title.value} </div>
              </div>
            )}
            {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
            {children}
          </div>
        </div>
      </div>
    </div>,
  );
};

ContentModal.propTypes = {
  header: PropTypes.node,
  title: PropTypes.Object,
  //
  // make icons an object w title and subtitle
  // titleIcon: PropTypes.oneOf(Object.values(ICON)).isRequired,
  subtitle: PropTypes.string,
  // subtitleIcon: PropTypes.oneOf(Object.values(ICON)).isRequired,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
  onRequestBack: PropTypes.func,
};

ContentModal.defaultProps = {
  title: null,
  header: null,
  subtitle: '',
  children: null,
  onRequestClose: null,
  onRequestBack: null,
};

export default Object.assign(ContentModal, {});

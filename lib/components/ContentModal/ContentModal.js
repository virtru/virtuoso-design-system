import React from 'react';
import PropTypes from 'prop-types';
import { usePortal } from '@/helpers';

import Chevron from '@/components/Chevron/Chevron';
import styles from './ContentModal.css';

const ContentModal = ({
  header,
  // titleKey,
  // titleValue,
  // subtitle,
  children,
  onRequestClose,
  onRequestBack,
}) => {
  return usePortal(
    <div className={styles.overlay}>
      <div className={styles.large}>
        <div className={styles.headerOuter}>
          <div className={styles.backButton}>
            <button type="button" className={styles.headerButton} onClick={onRequestBack}>
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
          {children && <div className={styles.content}>{children}</div>}
        </div>
      </div>
    </div>,
  );
};

ContentModal.propTypes = {
  header: PropTypes.node,
  titleKey: PropTypes.string,
  titleValue: PropTypes.string,
  // titleIcon: PropTypes.oneOf(Object.values(ICON)).isRequired,
  subtitle: PropTypes.string,
  // subtitleIcon: PropTypes.oneOf(Object.values(ICON)).isRequired,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
  onRequestBack: PropTypes.func,
};

ContentModal.defaultProps = {
  header: null,
  titleKey: '',
  titleValue: '',
  subtitle: '',
  children: null,
  onRequestClose: null,
  onRequestBack: null,
};

export default Object.assign(ContentModal, {});

/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { usePortal } from '@/helpers';
import { Chevron, Icon } from '@';
import styles from './ContentModal.css';

const ContentModal = ({
  header,
  titleIcon,
  title,
  subtitleIcon,
  subtitle,
  children,
  onRequestClose,
  onRequestBack,
}) => {
  return usePortal(
    <div className={styles.overlay}>
      <div className={styles.large}>
        <div className={styles.headerOuter}>
          <div className={styles.backButton}>
            <button
              type="button"
              className={cn(
                styles.headerButtonDefault,
                onRequestBack ? styles.headerButtonEnabled : styles.headerButtonDisabled,
              )}
              disabled={!onRequestBack}
              onClick={onRequestBack}
            >
              <Chevron variant={Chevron.VARIANT.THICKER} direction={Chevron.DIRECTION.LEFT} />
            </button>
          </div>
          <div className={styles.headerInner}> {header} </div>
          <div>
            <button
              type="button"
              className={cn(
                styles.headerButtonDefault,
                onRequestClose ? styles.headerButtonEnabled : styles.headerButtonDisabled,
              )}
              onClick={onRequestClose}
            >
              ✕
            </button>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            {title && (
              <div className={styles.title}>
                {titleIcon && (
                  <div className={styles.titleIcon}>
                    <Icon type={titleIcon} />
                  </div>
                )}
                {title.key && <div className={styles.titleKey}> {title.key}:&nbsp;</div>}
                <div className={styles.titleValue}> {title.value} </div>
              </div>
            )}
            {subtitle && (
              <div
                className={cn(
                  styles.subtitleDefault,
                  subtitleIcon ? styles.subtitleWithIcon : styles.subtitleWithoutIcon,
                )}
              >
                {subtitleIcon && (
                  <div className={styles.subtitleIcon}>
                    <Icon type={subtitleIcon} />
                  </div>
                )}
                {subtitle}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>,
  );
};

ContentModal.propTypes = {
  header: PropTypes.node,
  title: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  }),
  titleIcon: PropTypes.oneOf(Object.values(Icon.TYPES)),
  subtitleIcon: PropTypes.oneOf(Object.values(Icon.TYPES)),
  subtitle: PropTypes.string,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
  onRequestBack: PropTypes.func,
};

export default Object.assign(ContentModal);

/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { usePortal } from '@/helpers';
import Icon from '@/components/Icon/Icon';
import { Chevron } from '@';
import styles from './ContentModal.css';

const ContentModal = ({
  header,
  titleIconName,
  title,
  subtitleIconName,
  subtitle,
  children,
  onRequestClose,
  onRequestBack,
}) => {
  const reconcileIcon = (name) => Icon.NAMES[name] === name && <Icon name={name} />;
  const TitleIcon = reconcileIcon(titleIconName);
  const SubtitleIcon = reconcileIcon(subtitleIconName);
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
                {TitleIcon && <div className={styles.titleIcon}>{TitleIcon}</div>}
                {title.key && <div className={styles.titleKey}> {title.key}:&nbsp;</div>}
                <div className={styles.titleValue}> {title.value} </div>
              </div>
            )}
            {subtitle && (
              <div
                className={cn(
                  styles.subtitleDefault,
                  SubtitleIcon ? styles.subtitleWithIcon : styles.subtitleWithoutIcon,
                )}
              >
                {SubtitleIcon && <div className={styles.subtitleIcon}>{SubtitleIcon}</div>}
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
  titleIconName: PropTypes.oneOf(Object.values(Icon.NAMES)),
  subtitleIconName: PropTypes.oneOf(Object.values(Icon.NAMES)),
  subtitle: PropTypes.string,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
  onRequestBack: PropTypes.func,
};

ContentModal.defaultProps = {
  header: null,
  title: null,
  titleIconName: '',
  subtitleIconName: '',
  subtitle: '',
  children: null,
  onRequestClose: null,
  onRequestBack: null,
};

export default Object.assign(ContentModal);

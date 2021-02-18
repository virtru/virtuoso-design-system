import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { usePortal } from '@/helpers';
import Icon from '@/components/Icon/Icon';
import { Chevron } from '@';
import styles from './ContentModal.css';

const ContentModal = ({
  modalHeader,
  titleIconName,
  title,
  subtitleIconName,
  subtitle,
  children,
  onCloseClick,
  onBackClick,
  contentHeader,
  locators: { MODAL, CLOSE, KEY, VALUE },
}) => {
  useLayoutEffect(() => {
    const { scrollY } = window;
    window.scrollTo({ top: 0 });
    document.body.classList.add(styles.noOverflow);

    return () => {
      window.scrollTo({ top: scrollY });
      document.body.classList.remove(styles.noOverflow);
    };
  }, []);
  const reconcileIcon = (name) => name && Icon.NAMES[name] === name && <Icon name={name} />;
  const TitleIcon = reconcileIcon(titleIconName);
  const SubtitleIcon = reconcileIcon(subtitleIconName);
  return usePortal(
    <div className={styles.overlay}>
      <section className={cn(styles.modal, MODAL)}>
        <header className={styles.header}>
          <div className={styles.backButton}>
            <button
              type="button"
              className={cn(
                styles.headerButtonDefault,
                onBackClick ? styles.headerButtonEnabled : styles.headerButtonDisabled,
              )}
              disabled={!onBackClick}
              onClick={onBackClick}
            >
              <Chevron variant={Chevron.VARIANT.THICKER} direction={Chevron.DIRECTION.LEFT} />
            </button>
          </div>
          {modalHeader}
          <div>
            <button
              type="button"
              className={cn(
                styles.headerButtonDefault,
                onCloseClick ? styles.headerButtonEnabled : styles.headerButtonDisabled,
                CLOSE,
              )}
              onClick={onCloseClick}
            >
              ✕
            </button>
          </div>
        </header>
        <div className={cn(styles.titles, styles.inner)}>
          {title && (
            <div className={styles.title}>
              {TitleIcon && <div className={styles.titleIcon}>{TitleIcon}</div>}
              {title.key && <div className={cn(styles.titleKey, KEY)}> {title.key}:&nbsp;</div>}
              <div className={cn(styles.titleValue, VALUE)}> {title.value} </div>
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
        </div>
        <div className={cn(styles.inner)}> {contentHeader} </div>
        <div className={cn(styles.content, styles.inner)}>{children}</div>
      </section>
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
  onCloseClick: PropTypes.func,
  onBackClick: PropTypes.func,
  locators: PropTypes.shape({
    CLOSE: PropTypes.string,
    MODAL: PropTypes.string,
    KEY: PropTypes.string,
    VALUE: PropTypes.string,
  }),
};

ContentModal.defaultProps = {
  modalHeader: null,
  title: null,
  titleIconName: '',
  subtitleIconName: '',
  subtitle: '',
  children: null,
  onCloseClick: null,
  onBackClick: null,
  locators: { CLOSE: '', MODAL: '', KEY: '', VALUE: '' },
};

export default Object.assign(ContentModal);

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { usePortal } from '@/helpers';

import Chevron from '@/components/Chevron/Chevron';
import styles from './ContentModal.css';

const icons = require.context('./assets', true, /\.svg$/);
// const filepaths = Object.fromEntries(icons.keys());

// export const ICON_FILEPATHS = {
//   attachment: './attachment.svg',
//   drive: './drive.svg',

// };

export const ICONS = {
  ATTACHMENT: 'attachment',
  DRIVE: 'drive',
};

const getIcon = (alias) =>
  Object.prototype.hasOwnProperty.call(ICONS, alias.toUpperCase()) &&
  icons(`./${alias}.svg`).default;

const ContentModal = ({ header, title, subtitle, children, onRequestClose, onRequestBack }) => {
  // const
  const TitleIcon = getIcon(ICONS.ATTACHMENT);
  const SubtitleIcon = getIcon('a');
  // console.log(filepaths);
  // console.log(icons);
  return usePortal(
    <div className={styles.overlay}>
      <div className={styles.large}>
        <TitleIcon />
        {TitleIcon && <TitleIcon />} {SubtitleIcon && <SubtitleIcon />}
        <div className={styles.headerOuter}>
          <div className={styles.backButton}>
            <button
              type="button"
              className={
                onRequestBack ? styles.headerButton : cn(styles.headerButton, styles.disabled)
              }
              disabled={!onRequestBack}
              onClick={onRequestBack}
            >
              <Chevron variant={Chevron.VARIANT.THICKER} direction={Chevron.DIRECTION.LEFT} />
            </button>
          </div>
          <div className={styles.headerInner}> {header} </div>
          <div>
            <button type="button" className={styles.headerButton} onClick={onRequestClose}>
              ✕
            </button>
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
  titleIcon: PropTypes.oneOf(Object.values(ICONS)).isRequired,
  subtitleIcon: PropTypes.oneOf(Object.values(ICONS)).isRequired,
  subtitle: PropTypes.string,
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

export default Object.assign(ContentModal, { ICONS });

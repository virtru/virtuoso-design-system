/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { usePortal } from '@/helpers';

import Chevron from '@/components/Chevron/Chevron';
import styles from './ContentModal.css';

const icons = require.context('./assets', true, /\.svg$/);

export const ICONS = {
  ATTACHMENT: 'attachment',
  DRIVE: 'drive',
  EMAIL: 'email',
  REVOKE: 'revoke',
  PROTECTED_MD: 'protected_md',
  PROTECTED_TXT: 'protected_txt',
  PROTECTED_JPEG: 'protected_jpeg',
  PROTECTED_JPG: 'protected_jpg',
  PROTECTED_PNG: 'protected_png',
  PROTECTED_PPTX: 'protected_pptx',
  PROTECTED_XLSX: 'protected_xlsx',
  PROTECTED_DOCX: 'protected_docx',
  PROTECTED_PDF: 'protected_pdf',
  PROTECTED_EXT: 'protected_ext',
  MD: 'md',
  TXT: 'txt',
  JPEG: 'jpeg',
  JPG: 'jpg',
  PNG: 'png',
  PPTX: 'pptx',
  XLSX: 'xlsx',
  DOCX: 'docx',
  PDF: 'pdf',
  GENERIC: 'generic',
  ERROR: 'error',
};

const iconMap = icons.keys().reduce((images, path) => {
  const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
  images[key] = icons(path).default;
  return images;
}, {});

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
  const TitleIcon = iconMap[titleIcon];
  const SubtitleIcon = iconMap[subtitleIcon];

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
                {TitleIcon && <TitleIcon />}
                {title.key && <div className={styles.titleKey}> {title.key}:&nbsp;</div>}
                <div className={styles.titleValue}> {title.value} </div>
              </div>
            )}
            {subtitle && (
              <div className={styles.subtitle}>
                {SubtitleIcon && <SubtitleIcon />}
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
  title: PropTypes.Object,
  titleIcon: PropTypes.oneOf(Object.values(ICONS)).isRequired,
  subtitleIcon: PropTypes.oneOf(Object.values(ICONS)).isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
  onRequestBack: PropTypes.func,
};

ContentModal.defaultProps = {
  titleIcon: '',
  title: null,
  header: null,
  subtitleIcon: '',
  subtitle: '',
  children: null,
  onRequestClose: null,
  onRequestBack: null,
};

export default Object.assign(ContentModal, { ICONS });

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CheckCircleFilled, CloseCircleFilled, InfoCircleOutlined } from '@ant-design/icons';

import { Tooltip, Typography, IconTypeFile } from '@';

import styles from './fileListItem.css';

const FileListItem = ({
  name,
  extension,
  size,
  tooltipText,
  warning,
  button,
  decryptedExt,
  tabIndex,
  className,
  unsupportedFileType,
  watermarkEnabled,
  persistentProtectionEnabled,
  encryptedText,
  watermarkText,
  persistentProtectionText,
}) => {
  const tooltip = useMemo(() => {
    const getLimitationItem = (state, text) => (
      <div className={styles.limitationItem}>
        {state ? (
          <CheckCircleFilled className={styles.limitationItemIconSuccess} />
        ) : (
          <CloseCircleFilled className={styles.limitationItemIconDanger} />
        )}

        {text}
      </div>
    );

    return unsupportedFileType ? (
      <>
        {getLimitationItem(true, encryptedText)}

        {watermarkEnabled && getLimitationItem(false, watermarkText)}

        {persistentProtectionEnabled && getLimitationItem(false, persistentProtectionText)}
      </>
    ) : (
      <>
        <div className={styles.tooltipTitle}>
          <span className={styles.fileNameWrap}>
            <span className={styles.fileName}>{name}</span>
            <span className={styles.fileExtension}>{extension}</span>
          </span>
        </div>

        <Typography.Text className={styles.tooltipText}>{tooltipText}</Typography.Text>
      </>
    );
  }, [
    encryptedText,
    extension,
    name,
    persistentProtectionEnabled,
    persistentProtectionText,
    tooltipText,
    unsupportedFileType,
    watermarkEnabled,
    watermarkText,
  ]);

  return (
    <Tooltip
      placement="topRight"
      title={tooltip}
      color="white"
      overlayClassName={cn(styles.tooltipOverlay, {
        [styles.unsupportedFileType]: unsupportedFileType,
      })}
    >
      <div
        className={cn(styles.item, className)}
        data-testid="item-wrapper"
        aria-label={`${name}${extension}`}
        tabIndex={tabIndex}
      >
        <div
          className={cn(styles.inner, {
            [styles.warning]: warning || unsupportedFileType,
            [styles.noButton]: !button,
          })}
        >
          <div className={styles.icon}>
            {warning || unsupportedFileType ? (
              <InfoCircleOutlined className={styles.warnIcon} />
            ) : (
              <IconTypeFile name={decryptedExt.toUpperCase()} />
            )}
          </div>

          <div className={styles.fileInfo}>
            <div className={`${styles.fileInfoName} ${styles.fileNameWrap}`}>
              <span className={styles.fileName}>{name}</span>
              <span className={styles.fileExtension}>{extension}</span>
            </div>

            <div className={styles.fileInfoText}>{size}</div>

            <div className={styles.hoverElement}>{button}</div>
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

FileListItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  tooltipText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  warning: PropTypes.bool.isRequired,
  button: PropTypes.node,
  decryptedExt: PropTypes.string.isRequired,
  tabIndex: PropTypes.string,
  unsupportedFileType: PropTypes.bool,
  watermarkEnabled: PropTypes.bool,
  persistentProtectionEnabled: PropTypes.bool,
  encryptedText: PropTypes.node,
  watermarkText: PropTypes.node,
  persistentProtectionText: PropTypes.node,
};

FileListItem.defaultProps = {
  className: undefined,
  button: null,
  tabIndex: -1,
  unsupportedFileType: false,
  watermarkEnabled: false,
  persistentProtectionEnabled: false,
  encryptedText: 'Encrypted',
  watermarkText: 'Watermarking',
  persistentProtectionText: 'Persistent File Protection',
};

export default FileListItem;

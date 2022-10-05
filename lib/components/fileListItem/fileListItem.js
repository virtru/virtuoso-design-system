import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { InfoCircleOutlined } from '@ant-design/icons';

import BaseTooltip from './baseTooltip/baseTooltip';
import FileName from './fileName/fileName';
import UnsupportedFileTypeTooltip from './unsupportedFileTypeTooltip/unsupportedFileTypeTooltip';

import { Tooltip, IconTypeFile, Progress } from '@';

import styles from './fileListItem.css';

const progressWidth = 25;

const progressSettings = {
  showInfo: false,
  status: 'normal',
  strokeColor: 'var(--vds-color-blue-primary)',
  success: { percent: 0 },
  trailColor: 'var(--vds-color-blue-lightest)',
  type: 'circle',
  // eslint-disable-next-line no-magic-numbers
  strokeWidth: 2 / (progressWidth / 100), // 2px
  width: progressWidth,
};

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
  loading,
  progress,
}) => {
  const isUnsupportedFileTypeVariation = useMemo(
    () => unsupportedFileType && (watermarkEnabled || persistentProtectionEnabled),
    [persistentProtectionEnabled, unsupportedFileType, watermarkEnabled],
  );

  const icon = useMemo(() => {
    if (loading || progress !== undefined) {
      const progressProps = {
        ...progressSettings,
        className: cn(styles.progress, { [styles.infinite]: loading }),
        percent: progress,
      };

      if (progress === undefined) {
        progressProps.percent = 75;
      }

      return <Progress {...progressProps} />;
    }

    if (warning || isUnsupportedFileTypeVariation) {
      return <InfoCircleOutlined className={styles.warnIcon} />;
    }

    return <IconTypeFile name={decryptedExt.toUpperCase()} />;
  }, [decryptedExt, isUnsupportedFileTypeVariation, loading, progress, warning]);

  return (
    <Tooltip
      placement="topRight"
      title={
        isUnsupportedFileTypeVariation ? (
          <UnsupportedFileTypeTooltip
            watermarkEnabled={watermarkEnabled}
            persistentProtectionEnabled={persistentProtectionEnabled}
            encryptedText={encryptedText}
            watermarkText={watermarkText}
            persistentProtectionText={persistentProtectionText}
          />
        ) : (
          <BaseTooltip name={name} extension={extension} tooltipText={tooltipText} />
        )
      }
      color="white"
      overlayClassName={cn(styles.tooltipOverlay, {
        [styles.unsupportedFileType]: isUnsupportedFileTypeVariation,
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
            [styles.warning]: warning || isUnsupportedFileTypeVariation,
            [styles.noButton]: !button,
          })}
        >
          <div className={styles.icon}>{icon}</div>

          <div className={styles.fileInfo}>
            <FileName className={styles.fileInfoName} name={name} extension={extension} />

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
  size: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  decryptedExt: PropTypes.string.isRequired,
  watermarkEnabled: PropTypes.bool,
  persistentProtectionEnabled: PropTypes.bool,
  tooltipText: PropTypes.node,
  warning: PropTypes.bool,
  button: PropTypes.node,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unsupportedFileType: PropTypes.bool,
  encryptedText: PropTypes.node,
  watermarkText: PropTypes.node,
  persistentProtectionText: PropTypes.node,
  loading: PropTypes.bool,
  progress: PropTypes.number,
};

FileListItem.defaultProps = {
  className: undefined,
  watermarkEnabled: false,
  persistentProtectionEnabled: false,
  tooltipText: undefined,
  warning: false,
  button: undefined,
  tabIndex: -1,
  unsupportedFileType: false,
  encryptedText: 'Encrypted',
  watermarkText: 'Watermarking',
  persistentProtectionText: 'Persistent File Protection',
  loading: false,
  progress: undefined,
};

export default FileListItem;

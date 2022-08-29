import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { InfoCircleOutlined } from '@ant-design/icons';

import BaseTooltip from './baseTooltip/baseTooltip';
import FileName from './fileName/fileName';
import UnsupportedFileTypeTooltip from './unsupportedFileTypeTooltip/unsupportedFileTypeTooltip';

import { Tooltip, IconTypeFile } from '@';

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
  return (
    <Tooltip
      placement="topRight"
      title={
        unsupportedFileType ? (
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

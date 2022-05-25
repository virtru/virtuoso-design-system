import React from 'react';
import PropTypes from 'prop-types';
import { WarningOutlined } from '@ant-design/icons';
import { Tooltip, IconTypeFile } from '@';
import styles from './fileListItem.css';

const FileListItem = ({ name, extension, size, tooltipText, warning, button, decryptedExt }) => {
  const tooltip = (
    <>
      <div className={styles.tooltipTitle}>
        <span className={styles.fileName}>
          {warning && <WarningOutlined className={styles.warnIconName} />}
          {name}
        </span>
        <span className={styles.fileExtension}>{extension}</span>
      </div>
      {/* eslint-disable-next-line react/no-danger */}
      <div className={styles.tooltipText} dangerouslySetInnerHTML={{ __html: tooltipText }} />
    </>
  );

  return (
    <div className={styles.item} data-testid="item-wrapper">
      <div className={styles.inner}>
        <div className={styles.icon}>
          <IconTypeFile name={decryptedExt.toUpperCase()} />
        </div>
        <div className={styles.fileInfo}>
          <div className={styles.fileInfoName}>
            <span className={styles.fileName}>{name}</span>
            <span className={styles.fileExtension}>{extension}</span>
          </div>
          <div className={styles.fileInfoName}>{size}</div>
          {warning && <WarningOutlined className={styles.warnIcon} />}
          <Tooltip placement="topRight" title={tooltip} color="white">
            <div className={styles.hoverElement}>{button}</div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

FileListItem.propTypes = {
  name: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  tooltipText: PropTypes.string.isRequired,
  warning: PropTypes.bool.isRequired,
  button: PropTypes.node.isRequired,
  decryptedExt: PropTypes.string.isRequired,
};

export default FileListItem;

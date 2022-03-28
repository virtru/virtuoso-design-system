import React from 'react';
import PropTypes from 'prop-types';
import { FileOutlined, WarningOutlined } from '@ant-design/icons';
import { Tooltip, Typography } from '@';
import styles from './fileListItem.css';

const { Text } = Typography;

const FileListItem = ({ name, extension, size, tooltipText, warning, button }) => {
  const tooltip = (
    <div>
      <div className={styles.tooltipTitle}>
        <span className={styles.fileName}>{name}</span>
        <span className={styles.fileExtension}>{extension}</span>
      </div>
      <Text>{tooltipText}</Text>
    </div>
  );

  return (
    <div className={styles.item}>
      <div className={styles.inner}>
        <div className={styles.icon}>
          <FileOutlined />
        </div>
        <div className={styles.fileInfo}>
          <p className={styles.fileInfoName}>
            <span className={styles.fileName}>{name}</span>
            <span className={styles.fileExtension}>{extension}</span>
          </p>
          <p className={styles.fileInfoName}>{size}</p>
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
};

export default FileListItem;

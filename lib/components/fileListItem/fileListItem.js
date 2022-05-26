import React from 'react';
import PropTypes from 'prop-types';
import { WarningOutlined } from '@ant-design/icons';
import cn from 'classnames';
import { Tooltip, Typography, IconTypeFile } from '@';
import styles from './fileListItem.css';

const { Text } = Typography;

const FileListItem = ({ name, extension, size, tooltipText, warning, button, decryptedExt }) => {
  const [focusState, setFocusState] = React.useState(false);
  const tooltip = (
    <>
      <div className={styles.tooltipTitle}>
        <span className={styles.fileName}>
          {warning && <WarningOutlined className={styles.warnIconName} />}
          {name}
        </span>
        <span className={styles.fileExtension}>{extension}</span>
      </div>
      <Text className={styles.tooltipText}>{tooltipText}</Text>
    </>
  );

  const onFocus = () => {
    setFocusState(true);
  };
  const onBlur = () => {
    setFocusState(false);
  };

  return (
    <div className={styles.item} data-testid="item-wrapper">
      <div
        className={cn(styles.inner, focusState && styles.focus)}
        tabIndex="0"
        aria-label={`${name}.${decryptedExt}`}
        onFocus={onFocus}
        onBlur={onBlur}
      >
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

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { WarningOutlined } from '@ant-design/icons';
import { Tooltip, Typography, IconTypeFile } from '@';
import styles from './fileListItem.css';

const { Text } = Typography;

const FileListItem = ({
  name,
  extension,
  size,
  tooltipText,
  warning,
  button,
  decryptedExt,
  parentClassName,
}) => {
  const tooltip = (
    <>
      <div className={styles.tooltipTitle}>
        {warning && <WarningOutlined className={styles.warnIcon} />}

        <span className={styles.fileNameWrap}>
          <span className={styles.fileName}>{name}</span>
          <span className={styles.fileExtension}>{extension}</span>
        </span>
      </div>
      <Text className={styles.tooltipText}>{tooltipText}</Text>
    </>
  );

  const keyDown = (event) => {
    const { keyCode, target } = event;

    // eslint-disable-next-line no-magic-numbers
    if (keyCode === 37 || keyCode === 39) {
      const closestElement = target.closest(parentClassName);

      // eslint-disable-next-line no-magic-numbers
      if (keyCode === 37) {
        closestElement.previousSibling?.querySelector("[data-testid='item-wrapper']").focus();
      }
      // eslint-disable-next-line no-magic-numbers
      if (keyCode === 39) {
        closestElement.nextSibling?.querySelector("[data-testid='item-wrapper']").focus();
      }
    }
  };

  return (
    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={styles.item}
      data-testid="item-wrapper"
      aria-label={`${name}${extension}`}
      tabIndex="0"
      onKeyDown={keyDown}
    >
      <div
        className={cn(styles.inner, {
          [styles.warning]: warning,
          [styles.noButton]: !button,
        })}
      >
        <div className={styles.icon}>
          {warning ? (
            <WarningOutlined className={styles.warnIcon} />
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
          <Tooltip placement="topRight" title={tooltip} color="white">
            <div className={styles.hoverElement}>{button}</div>
          </Tooltip>
        </div>
      </div>
    </div>
    /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
  );
};

FileListItem.propTypes = {
  name: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  tooltipText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  warning: PropTypes.bool.isRequired,
  button: PropTypes.node,
  decryptedExt: PropTypes.string.isRequired,
  parentClassName: PropTypes.string,
};

FileListItem.defaultProps = {
  button: null,
  parentClassName: '.ant-col',
};

export default FileListItem;

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FileAddOutlined } from '@ant-design/icons';
import cn from 'classnames';

import styles from './fileInput.css';

const FileInput = React.memo(({ fileList, disabled }) => {
  const fileInputRef = useRef(null);
  const dropAreaRef = useRef(null);

  const onFileChange = (e) => {
    const files = e.target?.files;
    fileList(files);
    fileInputRef.current.value = null;
  };

  const preventCb = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    preventCb(e);
    const dropArea = dropAreaRef.current;
    dropArea.classList.remove(styles.focusedInputWrapper);
  };

  const handleDrop = (e) => {
    handleDragLeave(e);
    const dt = e.dataTransfer;
    const { files } = dt;
    fileList(files);
  };

  const handleDragEnter = (e) => {
    preventCb(e);
    const dropArea = dropAreaRef.current;
    dropArea.classList.add(styles.focusedInputWrapper);
  };

  const handleDragOver = (e) => {
    handleDragEnter(e);
    e.dataTransfer.dropEffect = 'copy';
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        name="files"
        type="file"
        multiple
        className={styles.input}
        ref={fileInputRef}
        id="files"
        aria-label="file-input"
        disabled={disabled}
        onChange={onFileChange}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
      <label htmlFor="files" className={styles.labelWrap}>
        <div
          ref={dropAreaRef}
          className={cn(styles.label, { [styles.labelDisable]: disabled })}
          onDragLeave={handleDragLeave}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-testid="drop-area"
        >
          <span className={cn(styles.textWrapper, { [styles.textWrapperDisable]: disabled })}>
            <FileAddOutlined className={styles.addFileIcon} />
            Drop or <span className={styles.fakeLink}>add files</span> here
          </span>
        </div>
      </label>
    </div>
  );
});

FileInput.propTypes = {
  fileList: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

FileInput.defaultProps = {
  disabled: false,
};

export default FileInput;

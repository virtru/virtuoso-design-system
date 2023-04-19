import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FileAddOutlined } from '@ant-design/icons';

import styles from './fileInput.css';

const FileInput = React.memo(({ fileList, multipleFiles }) => {
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
        multiple={enableMultiple}
        className={styles.input}
        ref={fileInputRef}
        id="files"
        aria-label="file-input"
        onChange={onFileChange}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
      <label htmlFor="files" className={styles.labelWrap}>
        <div
          ref={dropAreaRef}
          className={styles.label}
          onDragLeave={handleDragLeave}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-testid="drop-area"
        >
          <span className={styles.textWrapper}>
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
  // Whether to enable multiple file support
  multipleFiles: PropTypes.bool,
};

FileInput.defaultProps = {
  multipleFiles: true,
};

export default FileInput;

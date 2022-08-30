import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './fileName.css';

const FileName = ({ className, name, extension }) => (
  <span className={cn(styles.fileNameWrap, className)}>
    <span className={styles.fileName}>{name}</span>
    <span className={styles.fileExtension}>{extension}</span>
  </span>
);

FileName.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
};

FileName.defaultProps = {
  className: undefined,
};

export default FileName;

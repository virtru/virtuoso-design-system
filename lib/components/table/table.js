/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { Table as AntDTable } from 'antd';
import styles from './table.css';

const Table = (props) => {
  const defaultPagination = {
    showTotal: (total, range) => (
      <span className={styles.virtuosoCustomTotalTable}>
        {`${range[0]} - ${range[1]}\u00A0\u00A0of\u00A0\u00A0${total}`}
      </span>
    ),
    defaultCurrent: 1,
    showSizeChanger: false,
    showLessItems: true,
    size: 'small',
  };

  let { pagination } = props;
  pagination = { ...defaultPagination, ...pagination };

  props = { ...props, pagination };

  return <AntDTable simple {...props} className={styles.virtuosoCustomTable} />;
};

Table.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pagination: PropTypes.any,
};

Table.defaultProps = {
  pagination: null,
};

export default Table;

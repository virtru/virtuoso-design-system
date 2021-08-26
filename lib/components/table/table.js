import React from 'react';
import { Table as AntDTable } from 'antd';

const Table = (props) => {
  let { columns, pagination } = props;
  columns.forEach((col) => (col.title = <span style={{ fontWeight: '600' }}>{col.title}</span>));

  const defaultPagination = {
    showTotal: (total, range) => (
      <span
        style={{ fontWeight: '300', paddingRight: '15px' }}
      >{`${range[0]} - ${range[1]}\u00A0\u00A0of\u00A0\u00A0${total}`}</span>
    ),
    defaultCurrent: 1,
    showSizeChanger: false,
    showLessItems: true,
    size: 'small',
  };

  // or a nicer, ES6 syntax:
  pagination = { ...defaultPagination, ...pagination };
  props = { ...props, pagination: { ...defaultPagination, ...pagination } };

  return <AntDTable {...props} />;
};

export default Table;

import React from 'react';
import { Table as AntDTable } from 'antd';
// import styles from './table.css';

// const pageStyle = styles['ant-pagination.mini'];

const Table = (props) => {
  let { columns, pagination } = props;
  columns.forEach((col) => {
    col.title = <span style={{ fontWeight: '600' }}>{col.title}</span>;
  });

  const defaultPagination = {
    showTotal: (total, range) => (
      <span style={{ fontWeight: '300', paddingRight: '15px' }}>
        {`${range[0]} - ${range[1]}\u00A0\u00A0of\u00A0\u00A0${total}`}
      </span>
    ),
    defaultCurrent: 1,
    showSizeChanger: false,
    showLessItems: true,
    size: 'small',
  };

  pagination = { ...defaultPagination, ...pagination };
//   pagination.className = pageStyle;
//   pagination.style = pageStyle;
//   pagination.itemRender = (item, type) => {
//       if (type === 'page') {
//           console.log(type);
//     return <span style={{ display: 'none', height: 0, width: 0}}>{item}</span>;
//       }
//       return type;
//   };

  props = { ...props, pagination };
//   props.className = pageStyle;
//   props.style = pageStyle;

  return <AntDTable {...props} />;
};

export default Table;

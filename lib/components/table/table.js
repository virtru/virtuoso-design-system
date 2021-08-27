import React from 'react';
import { Table as AntDTable } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './table.css';

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

//   pagination.itemRender = (_, type, OriginalElement) => {
    // if (type === 'prev') {
    //   return (
    //     <span style={{}}>
    //       <LeftOutlined />
    //     </span>
    //   );
    // }
    // if (type === 'next') {
    //   return (
    //     <span style={{}}>
    //       <RightOutlined />
    //     </span>
    //   );
    // }
//     console.log(type);
//     console.log(OriginalElement);
//     if (type !== 'page') {
//       return (
//         <OriginalElement size="large"/>
//       );
//     }
//     return OriginalElement;
//   };

  props = { ...props, pagination };

  return <AntDTable {...props} />;
};

export default Table;

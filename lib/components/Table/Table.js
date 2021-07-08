import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table as TableAntd } from 'antd';
import 'antd/lib/table/style/index.css';

import styles from './Table.css';

const Table = ({ dataSource, columns, size, highlightOnHover, selectionRow, ...rest }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const rowSelection = {
    onChange: (selectedRows) => {
      setSelectedRowKeys([...selectedRows]);
    },
  };

  return (
    <TableAntd
      className={styles.table}
      columns={columns}
      dataSource={dataSource}
      size={size}
      rowClassName={!highlightOnHover && 'ant-table-disable-hover-row'}
      rowSelection={
        selectionRow && {
          selectedRowKeys,
          ...rowSelection,
        }
      }
      onRow={(record) => {
        return {
          onClick: () => {
            if (selectionRow) {
              if (selectedRowKeys.indexOf(record.key) < 0) {
                setSelectedRowKeys([...selectedRowKeys, record.key]);
              } else {
                setSelectedRowKeys([...selectedRowKeys.filter((item) => item !== record.key)]);
              }
            }
          },
        };
      }}
      {...rest}
    />
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    }),
  ),
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
    }),
  ),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  highlightOnHover: PropTypes.bool,
  selectionRow: PropTypes.bool,
};

Table.defaultProps = {
  columns: [],
  dataSource: [],
  size: 'small',
  highlightOnHover: false,
  selectionRow: false,
};

export default Table;

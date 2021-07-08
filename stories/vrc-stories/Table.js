/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from '@';

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 0) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [
  {
    title: 'Address',
    dataIndex: 'address',
    key: '0',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: '1',
  },
  {
    title: 'Updated',
    dataIndex: 'updated',
    key: '2',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: '3',
  },
];

const columnsWithWarning = [
  {
    title: 'Warning',
    colSpan: 0,
    dataIndex: 'warning',
    key: '0',
    render: (text, row, index) => {
      if (index === 0) {
        return {
          children: (
            <div
              style={{
                margin: '10px 0',
                border: '1px solid red',
                padding: '10px',
                color: 'red',
                borderRadius: '3px',
              }}
            >
              Your current IP Address: 01.02.03.04 is not whitelisted
            </div>
          ),
          props: { colSpan: 4 },
        };
      }
      return {
        children: text,
        props: {
          colSpan: 0,
        },
      };
    },
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: '1',
    render: renderContent,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: '2',
    render: renderContent,
  },
  {
    title: 'Updated',
    dataIndex: 'updated',
    key: '3',
    render: renderContent,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: '4',
    render: renderContent,
  },
];

const columnsWithSorting = [
  {
    title: 'Address',
    dataIndex: 'address',
    key: '0',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: '1',
  },
  {
    title: 'A Really Long Header for Update',
    dataIndex: 'updated',
    key: '2',
    sorter: {
      compare: (a, b) => +new Date(a.updated) - +new Date(b.updated),
      multiple: 1,
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: '3',
  },
];

const Inactive = () => <span style={{ fontWeight: 'bold', color: 'red' }}>Inactive</span>;

const data = [
  { address: '01.02.03.04.05', type: 'IP', updated: '2019-07-02', status: <Inactive />, key: '0' },
  { address: '01.02.03.04', type: 'IP', updated: '2019-07-01', status: <Inactive />, key: '1' },
  {
    address: '01.02.03.04.05 - 01.02.03.04.05',
    type: 'IP Range',
    updated: '2019-07-04',
    status: <Inactive />,
    key: '2',
  },
  {
    address: '01.02.03.04.05 / 40',
    type: 'CIDR block',
    updated: '2019-07-03',
    status: <Inactive />,
    key: '3',
  },
];

const dataWithWarning = [{ warning: null, key: '4' }, ...data];

storiesOf('Table', module)
  .lokiSkip('default', () => {
    return (
      <div style={{ width: '500px' }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    );
  })
  .add('basic', () => (
    <div style={{ width: '500px' }}>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  ))
  .add('highlights', () => (
    <div style={{ width: '500px' }}>
      <Table columns={columns} dataSource={data} highlightOnHover pagination={false} />
    </div>
  ))
  .add('highlights with warning', () => (
    <div style={{ width: '500px' }}>
      <Table
        rowClassName={(_, index) => index === 0 && 'ant-table-disable-hover-row'}
        columns={columnsWithWarning}
        dataSource={dataWithWarning}
        pagination={false}
      />
    </div>
  ))
  .add('sort + select', () => {
    return (
      <div style={{ width: '500px' }}>
        <Table
          columns={columnsWithSorting}
          dataSource={data}
          highlightOnHover
          selectionRow
          pagination={false}
        />
      </div>
    );
  })
  .add('focused row', () => {
    return (
      <div style={{ width: '500px' }}>
        <Table
          columns={columns}
          dataSource={data}
          rowClassName={(_, index) => index === 2 && 'ant-table-focus-row'}
          highlightOnHover
          pagination={false}
        />
      </div>
    );
  });

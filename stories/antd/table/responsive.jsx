import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name (all screens)',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age (medium screen or bigger)',
    dataIndex: 'age',
    key: 'age',
    responsive: ['md'],
  },
  {
    title: 'Address (large screen or bigger)',
    dataIndex: 'address',
    key: 'address',
    responsive: ['lg'],
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
];

storiesOf('antd/table', module).add('responsive', () => <Table columns={columns} dataSource={data} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Responsive columns.</p></>) } });
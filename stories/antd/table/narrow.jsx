import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];

for (let i = 0; i < 200; i += 1) {
  data.push({
    key: i,
    name: 'Sample Name',
    age: 30 + (i % 5),
    address: `Sample Address ${i}`,
  });
}

storiesOf('antd/table', module).add('narrow', () => 
  <div style={{ width: 300 }}>
    <Table columns={columns} dataSource={data} size="small" pagination={{ defaultCurrent: 13 }} />
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>There are two compacted table sizes: <code>middle</code> and <code>small</code>. The <code>small</code> size is used in Modals only.</p></>) } });
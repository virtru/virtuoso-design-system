import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

storiesOf('virtru/table', module).add('sticky', () => 
  <Table
    columns={columns}
    dataSource={data}
    scroll={{ x: 1500 }}
    summary={pageData => (
      <Table.Summary fixed>
        <Table.Summary.Row>
          <Table.Summary.Cell index={0} colSpan={2}>
            Fix Left
          </Table.Summary.Cell>
          <Table.Summary.Cell index={2} colSpan={8}>
            Scroll Context
          </Table.Summary.Cell>
          <Table.Summary.Cell index={10}>Fix Right</Table.Summary.Cell>
        </Table.Summary.Row>
      </Table.Summary>
    )}
    sticky
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>For long table，need to scroll to view the header and scroll bar，then you can now set the fixed header and scroll bar to follow the page.</p></>) } });
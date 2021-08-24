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
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];

storiesOf('table', module).add('fixed-columns', () => <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>To fix some columns and scroll inside other columns, and you must set <code>scroll.x</code> meanwhile.</p>
<blockquote>
  <p>Specify the width of columns if header and cell do not align properly. If specified width is not working or have gutter between columns, please try to leave one column at least without width to fit fluid layout, or make sure no <a href="https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241">long word to break table layout</a>.</p>
  <p>A fixed value which is greater than table width for <code>scroll.x</code> is recommended. The sum of unfixed columns should not greater than <code>scroll.x</code>.</p>
</blockquote>
<p><strong>Note: v4 using sticky to implement fixed effect. IE 11 will downgrade to horizontal scroll.</strong></p></>) } });
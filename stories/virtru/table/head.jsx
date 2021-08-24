import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

storiesOf('virtru/table', module).add('head', () => <Table columns={columns} dataSource={data} onChange={onChange} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Use <code>filters</code> to generate filter menu in columns, <code>onFilter</code> to determine filtered result, and <code>filterMultiple</code> to indicate whether it's multiple or single selection.</p>
<p>Uses <code>defaultFilteredValue</code> to make a column filtered by default.</p>
<p>Use <code>sorter</code> to make a column sortable. <code>sorter</code> can be a function of the type <code>function(a, b) &#123; ... &#125;</code> for sorting data locally.</p>
<p><code>sortDirections: ['ascend' | 'descend']</code> defines available sort methods for each columns, effective for all columns when set on table props. You can set as <code>['ascend', 'descend', 'ascend']</code> to prevent sorter back to default status.</p>
<p>Uses <code>defaultSortOrder</code> to make a column sorted by default.</p>
<p>If a <code>sortOrder</code> or <code>defaultSortOrder</code> is specified with the value <code>ascend</code> or <code>descend</code>, you can access this value from within the function passed to the <code>sorter</code> as explained above. Such a function can take the form: <code>function(a, b, sortOrder) &#123; ... &#125;</code>.</p></>) } });
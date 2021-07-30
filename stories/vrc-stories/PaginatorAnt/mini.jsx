/* eslint-disabled */
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import ReactDOM from 'react-dom';
import React from 'react';
import { Pagination } from 'antd';

function showTotal(total) {
  return `Total ${total} items`;
}

storiesOf('PaginatorAnt', module).add('mini', () => 
  <>
    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
    <Pagination
      size="small"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Mini size pagination.</p></>) } });
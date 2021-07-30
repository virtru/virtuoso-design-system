/* eslint-disabled */
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import ReactDOM from 'react-dom';
import React from 'react';
import { Pagination } from 'antd';

storiesOf('PaginatorAnt', module).add('all', () => 
  <>
    <Pagination
      total={85}
      showSizeChanger
      showQuickJumper
      showTotal={total => `Total ${total} items`}
    />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Show all configured prop.</p></>) } });
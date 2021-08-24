import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from 'antd';

storiesOf('pagination', module).add('all', () => 
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
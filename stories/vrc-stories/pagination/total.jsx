import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from 'antd';

storiesOf('pagination', module).add('total', () => 
  <>
    <Pagination
      total={85}
      showTotal={total => `Total ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
    <br />
    <Pagination
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can show the total number of data by setting <code>showTotal</code>.</p></>) } });
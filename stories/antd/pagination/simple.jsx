import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from 'antd';

storiesOf('antd/pagination', module).add('simple', () => 
  <>
    <Pagination simple defaultCurrent={2} total={50} />
    <br />
    <Pagination disabled simple defaultCurrent={2} total={50} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Simple mode.</p></>) } });
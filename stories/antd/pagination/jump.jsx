import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from 'antd';

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

storiesOf('antd/pagination', module).add('jump', () => 
  <>
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    <br />
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Jump to a page directly.</p></>) } });
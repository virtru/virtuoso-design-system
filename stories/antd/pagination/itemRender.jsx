import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from 'antd';

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}

storiesOf('antd/pagination', module).add('itemRender', () => <Pagination total={500} itemRender={itemRender} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Use text link for prev and next button.</p></>) } });
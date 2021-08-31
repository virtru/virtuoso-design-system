import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Popconfirm } from 'antd';

storiesOf('antd/popconfirm', module).add('locale', () => 
  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Set <code>okText</code> and <code>cancelText</code> props to customize the button's labels.</p></>) } });
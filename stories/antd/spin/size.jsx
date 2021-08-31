import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spin, Space } from 'antd';

storiesOf('antd/spin', module).add('size', () => 
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A small <code>Spin</code> is used for loading text, default sized <code>Spin</code> for loading a card-level block, and large <code>Spin</code> used for loading a <strong>page</strong>.</p></>) } });
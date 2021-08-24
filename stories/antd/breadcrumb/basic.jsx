import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Breadcrumb } from 'antd';

storiesOf('breadcrumb', module).add('basic', () => 
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The simplest use.</p></>) } });
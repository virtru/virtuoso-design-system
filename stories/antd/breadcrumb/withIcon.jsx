import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

storiesOf('breadcrumb', module).add('withIcon', () => 
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <UserOutlined />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The icon should be placed in front of the text.</p></>) } });
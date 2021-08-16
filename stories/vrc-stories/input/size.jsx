import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

storiesOf('input', module).add('size', () => 
  <>
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input placeholder="default size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>There are three sizes of an Input box: <code>large</code> (40px), <code>default</code> (32px) and <code>small</code> (24px).</p></>) } });
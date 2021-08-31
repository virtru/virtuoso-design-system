import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

storiesOf('antd/avatar', module).add('type', () => 
  <>
    <Avatar icon={<UserOutlined />} />
    <Avatar>U</Avatar>
    <Avatar size={40}>USER</Avatar>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar
      src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
    />
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Image, Icon and letter are supported, and the latter two kinds of avatar can have custom colors and background colors.</p></>) } });
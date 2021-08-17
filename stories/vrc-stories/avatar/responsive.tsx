import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

storiesOf('avatar', module).add('responsive', () => 
  <Avatar
    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
    icon={<AntDesignOutlined />}
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Avatar size can be automatically adjusted based on the screen size.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';

storiesOf('avatar', module).add('badge', () => 
  <>
    <span className="avatar-item">
      <Badge count={1}>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
    </span>
    <span>
      <Badge dot>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
    </span>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Usually used for reminders and notifications.</p></>) } });
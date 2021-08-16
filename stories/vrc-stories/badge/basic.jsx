import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge, Avatar } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

storiesOf('badge', module).add('basic', () => 
  <>
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Simplest Usage. Badge will be hidden when <code>count</code> is <code>0</code>, but we can use <code>showZero</code> to show it.</p></>) } });
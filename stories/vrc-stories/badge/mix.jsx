import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge, Avatar } from 'antd';

storiesOf('badge', module).add('mix', () => 
  <>
    <Badge count={5} status="success">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} status="warning">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} color="blue">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} color="#fa541c">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot status="success">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot status="warning">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot color="blue">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot color="#fa541c">
      <Avatar shape="square" size="large" />
    </Badge>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Using <code>count/dot</code> with custom <code>stauts/color</code>.</p></>) } });
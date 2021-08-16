import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

storiesOf('badge', module).add('basic', () => 
  <div>
    <Badge count={5}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={0} showZero>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Simplest Usage. Badge will be hidden when <code>count</code> is <code>0</code>, but we can use <code>showZero</code> to show it.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge, Avatar } from 'antd';

storiesOf('badge', module).add('overflow', () => 
  <>
    <Badge count={99}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={100}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={99} overflowCount={10}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={1000} overflowCount={999}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>mountNode,
#123;overflowCount&#125;+</code> is displayed when count is larger than <code>overflowCount</code>. The default value of <code>overflowCount</code> is <code>99</code>.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge, Avatar } from 'antd';

storiesOf('badge', module).add('size', () => 
  <>
    <Badge size="default" count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge size="small" count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Set size of numeral Badge.</p></>) } });
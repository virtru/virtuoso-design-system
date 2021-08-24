import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spin } from 'antd';

storiesOf('spin', module).add('inside', () => 
  <div className="example">
    <Spin />
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Spin in a container.</p></>) } });
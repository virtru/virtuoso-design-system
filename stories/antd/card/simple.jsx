import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Card } from 'antd';

storiesOf('antd/card', module).add('simple', () => 
  <Card style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A simple card only containing a content area.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Card } from 'antd';

storiesOf('card', module).add('basic', () => 
  <>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A basic card containing a title, content and an extra corner content. Supports two sizes: <code>default</code> and <code>small</code>.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Divider } from 'antd';

storiesOf('divider', module).add('vertical', () => 
  <>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Use <code>type="vertical"</code> make it vertical.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Divider } from 'antd';

storiesOf('antd/divider', module).add('customize-style', () => 
  <>
    <Divider style={{ borderWidth: 2, borderColor: '#7cb305' }} />
    <Divider style={{ borderColor: '#7cb305' }} dashed />
    <Divider style={{ borderColor: '#7cb305' }} dashed>
      Text
    </Divider>
    <Divider type="vertical" style={{ height: 60, borderColor: '#7cb305' }} />
    <Divider type="vertical" style={{ height: 60, borderColor: '#7cb305' }} dashed />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Use <code>style</code> to change default style.</p></>) } });
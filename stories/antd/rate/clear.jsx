import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Rate } from 'antd';

storiesOf('antd/rate', module).add('clear', () => 
  <>
    <Rate defaultValue={3} />
    <span className="ant-rate-text">allowClear: true</span>
    <br />
    <Rate allowClear={false} defaultValue={3} />
    <span className="ant-rate-text">allowClear: false</span>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Support set allow to clear star when click again.</p></>) } });
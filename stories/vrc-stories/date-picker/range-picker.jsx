import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

storiesOf('date-picker', module).add('range-picker', () => 
  <Space direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="year" />
  </Space>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Set range picker type by <code>picker</code> prop.</p></>) } });
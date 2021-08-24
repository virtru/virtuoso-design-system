import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { DatePicker, Space } from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

storiesOf('antd/date-picker', module).add('basic', () => 
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="week" />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="quarter" />
    <DatePicker onChange={onChange} picker="year" />
  </Space>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Basic use case. Users can select or input a date in panel.</p></>) } });
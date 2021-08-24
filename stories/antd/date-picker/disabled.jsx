import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY-MM-DD';
storiesOf('date-picker', module).add('disabled', () => 
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
    <DatePicker picker="month" defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
    <RangePicker
      defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
      disabled
    />
    <RangePicker
      defaultValue={[moment('2019-09-03', dateFormat), moment('2019-11-22', dateFormat)]}
      disabled={[false, true]}
    />
  </Space>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A disabled state of the <code>DatePicker</code>. You can also set as array to disable one of input.</p></>) } });
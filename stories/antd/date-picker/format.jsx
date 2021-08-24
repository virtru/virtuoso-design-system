import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const customFormat = value => `custom format: ${value.format(dateFormat)}`;

storiesOf('antd/date-picker', module).add('format', () => 
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
    <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
    <DatePicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} picker="month" />
    <RangePicker
      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={customFormat} />
  </Space>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>We can set the date format by <code>format</code>.</p></>) } });
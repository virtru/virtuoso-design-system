import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

storiesOf('antd/date-picker', module).add('presetted-ranges', () => 
  <Space direction="vertical" size={12}>
    <RangePicker
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
      onChange={onChange}
    />
    <RangePicker
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onChange}
    />
  </Space>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>We can set preset ranges to RangePicker to improve user experience.</p></>) } });
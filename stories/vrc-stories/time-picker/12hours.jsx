import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TimePicker } from 'antd';

function onChange(time, timeString) {
  console.log(time, timeString);
}

storiesOf('time-picker', module).add('12hours', () => 
  <>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} style={{ width: 140 }} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>TimePicker of 12 hours format, with default format <code>h:mm:ss a</code>.</p></>) } });
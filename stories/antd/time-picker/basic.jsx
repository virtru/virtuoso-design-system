import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}

storiesOf('antd/time-picker', module).add('basic', () => 
  <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Click <code>TimePicker</code>, and then we could select or input a time in panel.</p></>) } });
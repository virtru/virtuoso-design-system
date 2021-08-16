import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

const onChange = (time, timeString) => {
  console.log(time, timeString);
};

storiesOf('time-picker', module).add('colored-popup', () => 
  <TimePicker
    onChange={onChange}
    defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
    popupClassName="myCustomClassName"
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Passing custom class to <code>TimePicker</code> popup</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

storiesOf('antd/time-picker', module).add('size', () => 
  <>
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The input box comes in three sizes. large is used in the form, while the medium size is the default.</p></>) } });
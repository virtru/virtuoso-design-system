import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TimePicker } from 'antd';

storiesOf('time-picker', module).add('range-picker', () => <TimePicker.RangePicker />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Use time range picker with <code>TimePicker.RangePicker</code>.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TimePicker } from 'antd';

storiesOf('antd/time-picker', module).add('interval-options', () => <TimePicker minuteStep={15} secondStep={10} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Show stepped options by <code>hourStep</code> <code>minuteStep</code> <code>secondStep</code>.</p></>) } });
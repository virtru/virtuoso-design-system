import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

storiesOf('time-picker', module).add('disabled', () => <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A disabled state of the <code>TimePicker</code>.</p></>) } });
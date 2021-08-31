import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

const format = 'HH:mm';

storiesOf('antd/time-picker', module).add('hide-column', () => <TimePicker defaultValue={moment('12:08', format)} format={format} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>While part of <code>format</code> is omitted, the corresponding column in panel will disappear, too.</p></>) } });
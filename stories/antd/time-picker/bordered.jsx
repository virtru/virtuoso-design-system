import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TimePicker } from 'antd';

const { RangePicker } = TimePicker;

storiesOf('antd/time-picker', module).add('bordered', () => 
  <>
    <TimePicker bordered={false} />
    <RangePicker bordered={false} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Bordered-less style component.</p></>) } });
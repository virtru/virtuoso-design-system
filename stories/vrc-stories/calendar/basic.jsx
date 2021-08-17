import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}

storiesOf('calendar', module).add('basic', () => <Calendar onPanelChange={onPanelChange} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A basic calendar component with Year/Month switch.</p></>) } });
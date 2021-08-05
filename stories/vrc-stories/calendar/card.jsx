import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

storiesOf('calendar', module).add('card', () => 
  <div className="site-calendar-demo-card">
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Nested inside a container element for rendering in limited space.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Slider } from 'antd';

function formatter(value) {
  return `${value}%`;
}

storiesOf('slider', module).add('tip-formatter', () => 
  <>
    <Slider tipFormatter={formatter} />
    <Slider tipFormatter={null} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Use <code>tipFormatter</code> to format content of <code>Tooltip</code>. If <code>tipFormatter</code> is null, hide it.</p></>) } });
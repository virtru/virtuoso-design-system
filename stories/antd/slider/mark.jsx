import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Slider } from 'antd';

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

storiesOf('antd/slider', module).add('mark', () => 
  <>
    <h4>included=true</h4>
    <Slider marks={marks} defaultValue={37} />
    <Slider range marks={marks} defaultValue={[26, 37]} />

    <h4>included=false</h4>
    <Slider marks={marks} included={false} defaultValue={37} />

    <h4>marks & step</h4>
    <Slider marks={marks} step={10} defaultValue={37} />

    <h4>step=null</h4>
    <Slider marks={marks} step={null} defaultValue={37} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Using <code>marks</code> property to mark a graduated slider, use <code>value</code> or <code>defaultValue</code> to specify the position of thumb. When <code>included</code> is false, means that different thumbs are coordinative. when <code>step</code> is null, users can only slide the thumbs onto marks.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

storiesOf('antd/carousel', module).add('basic', () => 
  <Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Basic usage.</p></>) } });
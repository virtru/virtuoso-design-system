import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { BackTop } from 'antd';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

storiesOf('back-top', module).add('custom', () => 
  <div style={{ height: '600vh', padding: 8 }}>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <BackTop>
      <div style={style}>UP</div>
    </BackTop>
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can customize the style of the button, just note the size limit: no more than <code>40px * 40px</code>.</p></>) } });
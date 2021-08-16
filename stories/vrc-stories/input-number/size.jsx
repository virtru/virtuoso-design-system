import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

storiesOf('input-number', module).add('size', () => 
  <div className="site-input-number-wrapper">
    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>There are three sizes available to a numeric input box. By default, the size is <code>32px</code>. The two additional sizes are <code>large</code> and <code>small</code> which means <code>40px</code> and <code>24px</code>, respectively.</p></>) } });
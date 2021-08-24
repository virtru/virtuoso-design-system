import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { InputNumber } from 'antd';

function onChange(value: string) {
  console.log('changed', value);
}

storiesOf('antd/input-number', module).add('digit', () => 
  <InputNumber<string>
    style={{ width: 200 }}
    defaultValue="1"
    min="0"
    max="10"
    step="0.00000000000001"
    onChange={onChange}
    stringMode
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Use <code>stringMode</code> to support high precision decimals support. <code>onChange</code> will return string value instead. You need polyfill of BigInt if browser not support.</p></>) } });
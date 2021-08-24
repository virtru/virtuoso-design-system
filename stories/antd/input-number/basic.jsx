import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

storiesOf('input-number', module).add('basic', () => <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Numeric-only input box.</p></>) } });
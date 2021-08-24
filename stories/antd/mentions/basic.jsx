import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Mentions } from 'antd';

const { Option } = Mentions;

function onChange(value) {
  console.log('Change:', value);
}

function onSelect(option) {
  console.log('select', option);
}

storiesOf('mentions', module).add('basic', () => 
  <Mentions
    style={{ width: '100%' }}
    onChange={onChange}
    onSelect={onSelect}
    defaultValue="@afc163"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Basic usage.</p></>) } });
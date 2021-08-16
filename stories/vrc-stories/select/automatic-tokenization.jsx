import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

storiesOf('select', module).add('automatic-tokenization', () => 
  <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} tokenSeparators={[',']}>
    {children}
  </Select>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Try to copy <code>Lucy,Jack</code> and paste to the input. Only available in tags and multiple mode.</p></>) } });
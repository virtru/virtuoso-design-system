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

storiesOf('antd/select', module).add('tags', () => 
  <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
    {children}
  </Select>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Select with tags, transform input to tag (scroll the menu).</p></>) } });
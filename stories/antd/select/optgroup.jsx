import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

storiesOf('antd/select', module).add('optgroup', () => 
  <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
    <OptGroup label="Manager">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </OptGroup>
    <OptGroup label="Engineer">
      <Option value="Yiminghe">yiminghe</Option>
    </OptGroup>
  </Select>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Using <code>OptGroup</code> to group the options.</p></>) } });
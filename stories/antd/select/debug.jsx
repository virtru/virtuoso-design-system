import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Select, Input, Button } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

storiesOf('antd/select', module).add('debug', () => 
  <div
    style={{
      width: 500,
      position: 'relative',
      zIndex: 1,
      border: '1px solid red',
      background: '#FFF',
    }}
  >
    <Input style={{ width: 100 }} value="222" />
    <Select style={{ width: 120 }} onChange={handleChange} showSearch placeholder="233">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
      <Option value="long">I am super super long!</Option>
    </Select>
    <Select
      mode="multiple"
      style={{ width: 120 }}
      defaultValue={['lucy']}
      onChange={handleChange}
      showSearch
      placeholder="233"
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
      <Option value="long">I am super super long!</Option>
    </Select>
    <span className="debug-align">AntDesign</span>
    <Button>222</Button>
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Basic Usage.</p></>) } });
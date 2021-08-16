import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

storiesOf('select', module).add('label-in-value', () => 
  <Select
    labelInValue
    defaultValue={{ value: 'lucy' }}
    style={{ width: 120 }}
    onChange={handleChange}
  >
    <Option value="jack">Jack (100)</Option>
    <Option value="lucy">Lucy (101)</Option>
  </Select>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>As a default behavior, the <code>onChange</code> callback can only get the <code>value</code> of the selected item. The <code>labelInValue</code> prop can be used to get the <code>label</code> property of the selected item.</p>
<p>The <code>label</code> of the selected item will be packed as an object for passing to the <code>onChange</code> callback.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Select } from 'antd';
import { SmileOutlined, MehOutlined } from '@ant-design/icons';

const smileIcon = <SmileOutlined />;
const mehIcon = <MehOutlined />;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

storiesOf('select', module).add('suffix', () => 
  <>
    <Select
      suffixIcon={smileIcon}
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select suffixIcon={mehIcon} defaultValue="lucy" style={{ width: 120 }} disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Basic Usage.</p></>) } });
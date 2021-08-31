import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input, Select, Space, Cascader } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

storiesOf('antd/Input', module).add('addon', () => 
  <Space direction="vertical">
    <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
    <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
    <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
    <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
    <Input
      addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
      defaultValue="mysite"
    />
  </Space>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Using pre &amp; post tabs example.</p></>) } });
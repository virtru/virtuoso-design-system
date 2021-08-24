import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

storiesOf('antd/select', module).add('search-sort', () => 
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">Not Identified</Option>
    <Option value="2">Closed</Option>
    <Option value="3">Communicated</Option>
    <Option value="4">Identified</Option>
    <Option value="5">Resolved</Option>
    <Option value="6">Cancelled</Option>
  </Select>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Search the options with sorting.</p></>) } });
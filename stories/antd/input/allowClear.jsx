import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const onChange = e => {
  console.log(e);
};

storiesOf('antd/Input', module).add('allowClear', () => 
  <>
    <Input placeholder="input with clear icon" allowClear onChange={onChange} />
    <br />
    <br />
    <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Input box with the remove icon, click the icon to delete everything.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

storiesOf('antd/popconfirm', module).add('icon', () => 
  <Popconfirm title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
    <a href="#">Delete</a>
  </Popconfirm>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Set <code>icon</code> props to customize the icon.</p></>) } });
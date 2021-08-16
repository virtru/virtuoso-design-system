import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

storiesOf('icon', module).add('two-tone', () => 
  <div className="icons-list">
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can set <code>twoToneColor</code> prop to specific primary color for two-tone icons.</p></>) } });
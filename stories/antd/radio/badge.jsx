import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Radio, Badge } from 'antd';

storiesOf('antd/radio', module).add('badge', () => 
  <Radio.Group buttonStyle="solid">
    <Badge count={1}>
      <Radio.Button value={1}>Click Me</Radio.Button>
    </Badge>
    <Badge count={2}>
      <Radio.Button value={2}>Not Me</Radio.Button>
    </Badge>
  </Radio.Group>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Test Badge style.</p></>) } });
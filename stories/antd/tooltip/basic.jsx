import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tooltip } from 'antd';

storiesOf('tooltip', module).add('basic', () => 
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The simplest usage.</p></>) } });
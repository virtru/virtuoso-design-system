import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Switch } from 'antd';

storiesOf('switch', module).add('size', () => 
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>size="small"</code> represents a small sized switch.</p></>) } });
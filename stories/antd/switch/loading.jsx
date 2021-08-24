import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Switch } from 'antd';

storiesOf('antd/switch', module).add('loading', () => 
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Mark a pending state of switch.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Switch } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

storiesOf('antd/switch', module).add('basic', () => <Switch defaultChecked onChange={onChange} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The most basic usage.</p></>) } });
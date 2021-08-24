import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

storiesOf('checkbox', module).add('basic', () => <Checkbox onChange={onChange}>Checkbox</Checkbox>, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Basic usage of checkbox.</p></>) } });
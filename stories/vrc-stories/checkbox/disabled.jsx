import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Checkbox } from 'antd';

storiesOf('checkbox', module).add('disabled', () => 
  <>
    <Checkbox defaultChecked={false} disabled />
    <br />
    <Checkbox defaultChecked disabled />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Disabled checkbox.</p></>) } });
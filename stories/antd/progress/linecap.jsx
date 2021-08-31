import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Progress } from 'antd';

storiesOf('antd/progress', module).add('linecap', () => 
  <>
    <Progress strokeLinecap="square" percent={75} />
    <Progress strokeLinecap="square" type="circle" percent={75} />
    <Progress strokeLinecap="square" type="dashboard" percent={75} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>By setting <code>strokeLinecap="square"</code>, you can change the linecaps from round to square.</p></>) } });
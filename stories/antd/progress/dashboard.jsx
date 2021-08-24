import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Progress } from 'antd';

storiesOf('progress', module).add('dashboard', () => 
  <>
    <Progress type="dashboard" percent={75} />
    <Progress type="dashboard" percent={75} gapDegree={30} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>By setting <code>type=dashboard</code>, you can get a dashboard style of progress easily. Modify <code>gapDegree</code> to set the degree of gap.</p></>) } });
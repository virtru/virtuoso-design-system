import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Progress } from 'antd';

storiesOf('antd/progress', module).add('circle', () => 
  <>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A circular progress bar.</p></>) } });
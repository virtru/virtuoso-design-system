import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Progress } from 'antd';

storiesOf('antd/progress', module).add('circle-mini', () => 
  <>
    <Progress type="circle" percent={30} width={80} />
    <Progress type="circle" percent={70} width={80} status="exception" />
    <Progress type="circle" percent={100} width={80} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A smaller circular progress bar.</p></>) } });
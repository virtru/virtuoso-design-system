import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Progress } from 'antd';

storiesOf('antd/progress', module).add('line', () => 
  <>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A standard progress bar.</p></>) } });
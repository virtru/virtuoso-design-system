import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Progress } from 'antd';

storiesOf('antd/progress', module).add('steps', () => 
  <>
    <Progress percent={50} steps={3} />
    <br />
    <Progress percent={30} steps={5} />
    <br />
    <Progress percent={100} steps={5} size="small" strokeColor="#52c41a" />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A progress bar with steps.</p></>) } });
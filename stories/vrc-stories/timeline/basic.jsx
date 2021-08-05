import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Timeline } from 'antd';

storiesOf('timeline', module).add('basic', () => 
  <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Basic timeline.</p></>) } });
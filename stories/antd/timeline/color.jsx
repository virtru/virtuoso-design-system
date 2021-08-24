import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Timeline } from 'antd';

storiesOf('timeline', module).add('color', () => 
  <Timeline>
    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </Timeline.Item>
  </Timeline>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Set the color of circles. <code>green</code> means completed or success status, <code>red</code> means warning or error, and <code>blue</code> means ongoing or other default status, <code>gray</code> for unfinished or disabled status.</p></>) } });
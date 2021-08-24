import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

storiesOf('antd/steps', module).add('small-size', () => 
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>By setting like this: <code>&lt;Steps size="small"&gt;</code>, you can get a mini version.</p></>) } });
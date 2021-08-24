import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

storiesOf('antd/steps', module).add('progress', () => 
  <Steps current={1} percent={60}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Steps with progress.</p></>) } });
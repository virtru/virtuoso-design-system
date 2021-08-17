import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

storiesOf('steps', module).add('error', () => 
  <Steps current={1} status="error">
    <Step title="Finished" description="This is a description" />
    <Step title="In Process" description="This is a description" />
    <Step title="Waiting" description="This is a description" />
  </Steps>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>By using <code>status</code> of <code>Steps</code>, you can specify the state for current step.</p></>) } });
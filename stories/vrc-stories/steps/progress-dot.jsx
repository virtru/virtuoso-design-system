import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Steps, Divider } from 'antd';

const { Step } = Steps;

storiesOf('steps', module).add('progress-dot', () => 
  <>
    <Steps progressDot current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
    <Divider />
    <Steps progressDot current={1} direction="vertical">
      <Step title="Finished" description="This is a description. This is a description." />
      <Step title="Finished" description="This is a description. This is a description." />
      <Step title="In Progress" description="This is a description. This is a description." />
      <Step title="Waiting" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Steps with progress dot style.</p></>) } });
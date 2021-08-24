import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Steps, Popover } from 'antd';

const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

storiesOf('steps', module).add('customized-progress-dot', () => 
  <Steps current={1} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
  </Steps>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can customize the display for Steps with progress dot style.</p></>) } });
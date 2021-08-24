import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

storiesOf('antd/steps', module).add('vertical-small', () => 
  <Steps direction="vertical" size="small" current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A simple mini version step bar in the vertical direction.</p></>) } });
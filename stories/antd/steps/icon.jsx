import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

const { Step } = Steps;

storiesOf('antd/steps', module).add('icon', () => 
  <Steps>
    <Step status="finish" title="Login" icon={<UserOutlined />} />
    <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
    <Step status="process" title="Pay" icon={<LoadingOutlined />} />
    <Step status="wait" title="Done" icon={<SmileOutlined />} />
  </Steps>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can use your own custom icons by setting the property <code>icon</code> for <code>Steps.Step</code>.</p></>) } });
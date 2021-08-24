import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Steps, Radio, Card } from 'antd';

const { Step } = Steps;

const App = () => {
  const [size, setSize] = useState('default');
  const horizontalSteps = (
    <Card>
      <Steps size={size}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </Card>
  );
  return (
    <>
      <Radio.Group
        style={{ marginBottom: 16 }}
        value={size}
        onChange={e => setSize(e.target.value)}
      >
        <Radio value="small">Small</Radio>
        <Radio value="default">Default</Radio>
      </Radio.Group>
      <Steps size={size} direction="vertical">
        <Step title="Finished" description={horizontalSteps} />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </>
  );
};

storiesOf('antd/steps', module).add('steps-in-steps', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Test style of Steps inside Steps.</p></>) } });
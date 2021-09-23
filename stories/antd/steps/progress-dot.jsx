import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Steps, Divider } from 'antd';

const { Step } = Steps;

storiesOf('Components/Ant Design/Steps', module).add('progress-dot', () => 
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
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/steps/" target="_blank">
                  documentation on Steps component
                </a>.
              </>
            ) }
        });
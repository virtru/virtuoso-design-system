import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

storiesOf('Components/Ant Design/Steps', module).add('progress', () => 
  <Steps current={1} percent={60}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>,
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
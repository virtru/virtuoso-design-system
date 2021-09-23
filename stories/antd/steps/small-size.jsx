import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

storiesOf('Components/Ant Design/Steps', module).add('small-size', () => 
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
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
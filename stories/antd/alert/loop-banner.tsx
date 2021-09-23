import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Alert } from 'antd';
import TextLoop from 'react-text-loop';

storiesOf('Components/Ant Design/Alert', module).add('loop-banner', () => 
  <Alert
    banner
    message={
      <TextLoop mask>
        <div>Notice message one</div>
        <div>Notice message two</div>
        <div>Notice message three</div>
        <div>Notice message four</div>
      </TextLoop>
    }
  />,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/alert/" target="_blank">
                  documentation on Alert component
                </a>.
              </>
            ) }
        });
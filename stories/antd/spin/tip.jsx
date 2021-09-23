import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spin, Alert } from 'antd';

storiesOf('Components/Ant Design/Spin', module).add('tip', () => 
  <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/spin/" target="_blank">
                  documentation on Spin component
                </a>.
              </>
            ) }
        });
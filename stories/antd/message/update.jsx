import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, message } from 'antd';

const key = 'updatable';

const openMessage = () => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: 'Loaded!', key, duration: 2 });
  }, 1000);
};

storiesOf('Components/Ant Design/Message', module).add('update', () => 
  <Button type="primary" onClick={openMessage}>
    Open the message box
  </Button>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/message/" target="_blank">
                  documentation on Message component
                </a>.
              </>
            ) }
        });
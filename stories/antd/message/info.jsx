import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { message, Button } from 'antd';

const info = () => {
  message.info('This is a normal message');
};

storiesOf('Components/Ant Design/Message', module).add('info', () => 
  <Button type="primary" onClick={info}>
    Display normal message
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
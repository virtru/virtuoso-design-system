import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, notification } from 'antd';

const openNotification = () => {
  const args = {
    message: 'Notification Title',
    description:
      'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
    duration: 0,
  };
  notification.open(args);
};

storiesOf('Components/Ant Design/Notification', module).add('duration', () => 
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/notification/" target="_blank">
                  documentation on Notification component
                </a>.
              </>
            ) }
        });
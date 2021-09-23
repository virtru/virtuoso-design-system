import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    className: 'custom-class',
    style: {
      width: 600,
    },
  });
};

storiesOf('Components/Ant Design/Notification', module).add('custom-style', () => 
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
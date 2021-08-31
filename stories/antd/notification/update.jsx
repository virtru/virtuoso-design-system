import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, notification } from 'antd';

const key = 'updatable';

const openNotification = () => {
  notification.open({
    key,
    message: 'Notification Title',
    description: 'description.',
  });
  setTimeout(() => {
    notification.open({
      key,
      message: 'New Title',
      description: 'New description.',
    });
  }, 1000);
};

storiesOf('antd/notification', module).add('update', () => 
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Update content with unique key.</p></>) } });
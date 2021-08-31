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

storiesOf('antd/notification', module).add('custom-style', () => 
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The style and className are available to customize Notification.</p></>) } });
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

storiesOf('antd/notification', module).add('duration', () => 
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>Duration</code> can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0, the notification box will never close automatically.</p></>) } });
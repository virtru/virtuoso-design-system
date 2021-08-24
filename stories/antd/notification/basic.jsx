import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, notification } from 'antd';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

storiesOf('notification', module).add('basic', () => 
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The simplest usage that close the notification box after 4.5s.</p></>) } });
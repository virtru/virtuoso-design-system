import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, notification, Space } from 'antd';

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

storiesOf('notification', module).add('with-icon', () => 
  <Space>
    <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
    <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
  </Space>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A notification box with a icon at the left side.</p></>) } });
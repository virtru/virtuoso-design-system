import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

storiesOf('antd/notification', module).add('custom-icon', () => 
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The icon can be customized to any react node.</p></>) } });
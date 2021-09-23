import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, notification, Divider, Space } from 'antd';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons';

const openNotification = placement => {
  notification.info({
    message: `Notification ${placement}`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement,
  });
};

storiesOf('Components/Ant Design/Notification', module).add('placement', () => 
  <div>
    <Space>
      <Button type="primary" onClick={() => openNotification('topLeft')}>
        <RadiusUpleftOutlined />
        topLeft
      </Button>
      <Button type="primary" onClick={() => openNotification('topRight')}>
        <RadiusUprightOutlined />
        topRight
      </Button>
    </Space>
    <Divider />
    <Space>
      <Button type="primary" onClick={() => openNotification('bottomLeft')}>
        <RadiusBottomleftOutlined />
        bottomLeft
      </Button>
      <Button type="primary" onClick={() => openNotification('bottomRight')}>
        <RadiusBottomrightOutlined />
        bottomRight
      </Button>
    </Space>
  </div>,
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
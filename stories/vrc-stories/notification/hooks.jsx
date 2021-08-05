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

const Context = React.createContext({ name: 'Default' });

const Demo = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = placement => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };

  return (
    <Context.Provider value={{ name: 'Ant Design' }}>
      {contextHolder}
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
    </Context.Provider>
  );
};

storiesOf('notification', module).add('hooks', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Use <code>notification.useNotification</code> to get <code>contextHolder</code> with context accessible issue.</p></>) } });
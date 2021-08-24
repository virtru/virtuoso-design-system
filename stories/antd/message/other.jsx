import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { message, Button, Space } from 'antd';

const success = () => {
  message.success('This is a success message');
};

const error = () => {
  message.error('This is an error message');
};

const warning = () => {
  message.warning('This is a warning message');
};

storiesOf('message', module).add('other', () => 
  <Space>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </Space>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Messages of success, error and warning types.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, message } from 'antd';

const key = 'updatable';

const openMessage = () => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: 'Loaded!', key, duration: 2 });
  }, 1000);
};

storiesOf('antd/message', module).add('update', () => 
  <Button type="primary" onClick={openMessage}>
    Open the message box
  </Button>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Update message content with unique <code>key</code>.</p></>) } });
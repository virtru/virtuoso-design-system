import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { message, Button } from 'antd';

const info = () => {
  message.info('This is a normal message');
};

storiesOf('antd/message', module).add('info', () => 
  <Button type="primary" onClick={info}>
    Display normal message
  </Button>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Normal message for information.</p></>) } });
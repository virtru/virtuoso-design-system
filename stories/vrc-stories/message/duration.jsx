import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { message, Button } from 'antd';

const success = () => {
  message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};

storiesOf('message', module).add('duration', () => <Button onClick={success}>Customized display duration</Button>, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Customize message display duration from default <code>3s</code> to <code>10s</code>.</p></>) } });
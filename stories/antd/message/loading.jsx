import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { message, Button } from 'antd';

const success = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

storiesOf('antd/message', module).add('loading', () => <Button onClick={success}>Display a loading indicator</Button>, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Display a global loading indicator, which is dismissed by itself asynchronously.</p></>) } });
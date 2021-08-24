import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Alert } from 'antd';

storiesOf('antd/alert', module).add('banner', () => 
  <>
    <Alert message="Warning text" banner />
    <br />
    <Alert
      message="Very long warning text warning text text text text text text text"
      banner
      closable
    />
    <br />
    <Alert showIcon={false} message="Warning text without icon" banner />
    <br />
    <Alert type="error" message="Error text" banner />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Display Alert as a banner at top of page.</p></>) } });
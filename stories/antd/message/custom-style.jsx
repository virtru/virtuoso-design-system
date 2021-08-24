import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { message, Button } from 'antd';

const success = () => {
  message.success({
    content: 'This is a prompt message with custom className and style',
    className: 'custom-class',
    style: {
      marginTop: '20vh',
    },
  });
};

storiesOf('message', module).add('custom-style', () => <Button onClick={success}>Customized style</Button>, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The <code>style</code> and <code>className</code> are available to customize Message.</p></>) } });
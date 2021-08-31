import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Modal, Button, Space } from 'antd';

function info() {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    content: 'some messages...some messages...',
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  Modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}

storiesOf('antd/modal', module).add('info', () => 
  <Space>
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </Space>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>In the various types of information modal dialog, only one button to close dialog is provided.</p></>) } });
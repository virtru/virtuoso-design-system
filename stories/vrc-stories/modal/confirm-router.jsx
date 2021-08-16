import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

function destroyAll() {
  Modal.destroyAll();
}

const { confirm } = Modal;

function showConfirm() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }, i * 500);
  }
}

storiesOf('modal', module).add('confirm-router', () => <Button onClick={showConfirm}>Confirm</Button>, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>Modal.destroyAll()</code> will destroy all confirmation modal dialogs. Usually, you can use it in router change event to destroy confirm modal dialog automatically.</p></>) } });
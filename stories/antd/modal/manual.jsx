import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Modal, Button } from 'antd';

function countDown() {
  let secondsToGo = 5;
  const modal = Modal.success({
    title: 'This is a notification message',
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

storiesOf('modal', module).add('manual', () => <Button onClick={countDown}>Open modal to close in 5s</Button>, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Manually updating and destroying a modal from <code>Modal.method</code>.</p></>) } });
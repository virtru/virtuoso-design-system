import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { message, Button } from 'antd';

const success = () => {
  message
    .loading('Action in progress..', 2.5)
    .then(() => message.success('Loading finished', 2.5))
    .then(() => message.info('Loading finished is finished', 2.5));
};

storiesOf('message', module).add('thenable', () => <Button onClick={success}>Display sequential messages</Button>, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>message</code> provides a promise interface for <code>onClose</code>. The above example will display a new message when the old message is about to close.</p></>) } });
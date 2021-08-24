import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Alert } from 'antd';

storiesOf('antd/alert', module).add('close-text', () => <Alert message="Info Text" type="info" closeText="Close Now" />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Replace the default icon with customized text.</p></>) } });
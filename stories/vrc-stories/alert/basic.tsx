import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Alert } from 'antd';

storiesOf('alert', module).add('basic', () => <Alert message="Success Text" type="success" />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The simplest usage for short messages.</p></>) } });
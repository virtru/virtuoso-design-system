import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from 'antd';

storiesOf('input', module).add('borderless', () => <Input placeholder="Borderless" bordered={false} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>No border.</p></>) } });
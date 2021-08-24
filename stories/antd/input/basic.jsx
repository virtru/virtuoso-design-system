import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from 'antd';

storiesOf('antd/Input', module).add('basic', () => <Input placeholder="Basic usage" />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Basic usage example.</p></>) } });
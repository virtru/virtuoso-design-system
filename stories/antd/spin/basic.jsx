import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spin } from 'antd';

storiesOf('antd/spin', module).add('basic', () => <Spin />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A simple loading status.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Empty } from 'antd';

storiesOf('antd/empty', module).add('basic', () => <Empty />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Simplest Usage.</p></>) } });
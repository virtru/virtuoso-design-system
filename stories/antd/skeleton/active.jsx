import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Skeleton } from 'antd';

storiesOf('antd/skeleton', module).add('active', () => <Skeleton active />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Display active animation.</p></>) } });
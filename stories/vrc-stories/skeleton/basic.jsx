import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Skeleton } from 'antd';

storiesOf('skeleton', module).add('basic', () => <Skeleton />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Simplest Skeleton usage.</p></>) } });
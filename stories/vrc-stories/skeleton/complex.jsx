import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Skeleton } from 'antd';

storiesOf('skeleton', module).add('complex', () => <Skeleton avatar paragraph={{ rows: 4 }} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Complex combination with avatar and multiple paragraphs.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Rate } from 'antd';

storiesOf('antd/rate', module).add('half', () => <Rate allowHalf defaultValue={2.5} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Support select half star.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Rate } from 'antd';

storiesOf('antd/rate', module).add('basic', () => <Rate />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The simplest usage.</p></>) } });
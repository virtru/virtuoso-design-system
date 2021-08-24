import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { InputNumber } from 'antd';

storiesOf('antd/input-number', module).add('borderless', () => <InputNumber min={1} max={10} defaultValue={3} bordered={false} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>No border.</p></>) } });
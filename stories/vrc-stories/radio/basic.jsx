import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Radio } from 'antd';

storiesOf('radio', module).add('basic', () => <Radio>Radio</Radio>, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The simplest use.</p></>) } });
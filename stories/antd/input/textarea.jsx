import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

storiesOf('antd/Input', module).add('textarea', () => <TextArea rows={4} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>For multi-line input.</p></>) } });
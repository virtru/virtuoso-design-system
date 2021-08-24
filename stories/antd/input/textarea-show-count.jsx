import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const onChange = e => {
  console.log('Change:', e.target.value);
};

storiesOf('antd/Input', module).add('textarea-show-count', () => <TextArea showCount maxLength={100} onChange={onChange} />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Show character counting.</p></>) } });
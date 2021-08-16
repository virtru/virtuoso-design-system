import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Radio } from 'antd';

const App = () => (
  <Radio.Group name="radiogroup" defaultValue={1}>
    <Radio value={1}>A</Radio>
    <Radio value={2}>B</Radio>
    <Radio value={3}>C</Radio>
    <Radio value={4}>D</Radio>
  </Radio.Group>
);

storiesOf('radio', module).add('radiogroup-with-name', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Passing the <code>name</code> property to all <code>input[type="radio"]</code> that are in the same Radio.Group. It is usually used to let the browser see your Radio.Group as a real "group" and keep the default behavior. For example, using left/right keyboard arrow to change your selection that in the same Radio.Group.</p></>) } });
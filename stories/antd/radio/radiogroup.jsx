import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Radio } from 'antd';

const App = () => {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
};

storiesOf('antd/radio', module).add('radiogroup', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A group of radio components.</p></>) } });
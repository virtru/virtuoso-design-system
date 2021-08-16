import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { TimePicker } from 'antd';

const Demo = () => {
  const [value, setValue] = useState(null);

  const onChange = time => {
    setValue(time);
  };

  return <TimePicker value={value} onChange={onChange} />;
};

storiesOf('time-picker', module).add('value', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>value</code> and <code>onChange</code> should be used together,</p></>) } });
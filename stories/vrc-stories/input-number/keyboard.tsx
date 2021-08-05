import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { InputNumber, Checkbox, Space } from 'antd';

const App = () => {
  const [keyboard, setKeyboard] = React.useState(true);
  return (
    <Space>
      <InputNumber min={1} max={10} keyboard={keyboard} defaultValue={3} />
      <Checkbox
        onChange={() => {
          setKeyboard(!keyboard);
        }}
        checked={keyboard}
      >
        Toggle keyboard
      </Checkbox>
    </Space>
  );
};

storiesOf('input-number', module).add('keyboard', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Control keyboard behavior by <code>keyboard</code>.</p></>) } });
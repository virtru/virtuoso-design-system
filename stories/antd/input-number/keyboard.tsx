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

storiesOf('Components/Ant Design/Input Number', module).add('keyboard', () => <App />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/input-number/" target="_blank">
                  documentation on Input Number component
                </a>.
              </>
            ) }
        });
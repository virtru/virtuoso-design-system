import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { InputNumber, Button, Space } from 'antd';

const Demo = () => {
  const [value, setValue] = React.useState<string | number>('99');

  return (
    <Space>
      <InputNumber min={1} max={10} value={value} onChange={setValue} />
      <Button
        type="primary"
        onClick={() => {
          setValue(99);
        }}
      >
        Reset
      </Button>
    </Space>
  );
};

storiesOf('Components/Ant Design/Input Number', module).add('out-of-range', () => <Demo />, {
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
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

storiesOf('antd/input-number', module).add('out-of-range', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Show warning style when <code>value</code> is out of range by control.</p></>) } });
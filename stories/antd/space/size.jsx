import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Space, Radio, Button } from 'antd';

function SpaceSize() {
  const [size, setSize] = useState('small');

  return (
    <>
      <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
        <Radio value="small">Small</Radio>
        <Radio value="middle">Middle</Radio>
        <Radio value="large">Large</Radio>
      </Radio.Group>
      <br />
      <br />
      <Space size={size}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  );
}

storiesOf('antd/space', module).add('size', () => <SpaceSize />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>large</code>, <code>middle</code> and <code>small</code> preset sizes.</p>
<p>Set the size to <code>large</code> and <code>middle</code> by setting size to large and middle respectively. If <code>size</code> is not set, the spacing is <code>small</code>.</p></>) } });
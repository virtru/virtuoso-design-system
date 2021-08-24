import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Space, Slider, Button } from 'antd';

function SpaceCustomizeSize() {
  const [size, setSize] = useState(8);

  return (
    <>
      <Slider value={size} onChange={value => setSize(value)} />
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

storiesOf('space', module).add('customize', () => <SpaceCustomizeSize />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Custom spacing size.</p></>) } });
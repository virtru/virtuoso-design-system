import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Space, Button } from 'antd';

const Demo = () => (
  <Space size={[8, 16]} wrap>
    {new Array(20).fill(null).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Button key={index}>Button</Button>
    ))}
  </Space>
);

storiesOf('space', module).add('wrap', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Auto wrap line.</p></>) } });
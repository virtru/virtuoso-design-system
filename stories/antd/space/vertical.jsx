import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Space, Card } from 'antd';

function SpaceVertical() {
  return (
    <Space direction="vertical">
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
}

storiesOf('antd/space', module).add('vertical', () => <SpaceVertical />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Crowded components vertical spacing.</p>
<p>Can set <code>width: 100%</code> to fill a row.</p></>) } });
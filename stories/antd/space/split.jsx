import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Space, Typography, Divider } from 'antd';

function SpaceSplit() {
  return (
    <Space split={<Divider type="vertical" />}>
      <Typography.Link>Link</Typography.Link>
      <Typography.Link>Link</Typography.Link>
      <Typography.Link>Link</Typography.Link>
    </Space>
  );
}

storiesOf('antd/space', module).add('split', () => <SpaceSplit />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Crowded components split.</p></>) } });
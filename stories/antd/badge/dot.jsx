import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

storiesOf('antd/badge', module).add('dot', () => 
  <div>
    <Badge dot>
      <NotificationOutlined />
    </Badge>
    <Badge count={0} dot>
      <NotificationOutlined />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>This will simply display a red badge, without a specific count. If count equals 0, it won't display the dot.</p></>) } });
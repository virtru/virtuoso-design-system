import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tag } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

storiesOf('antd/tag', module).add('customize', () => 
  <>
    <Tag closable closeIcon="关 闭">
      Tag1
    </Tag>
    <Tag closable closeIcon={<CloseCircleOutlined />}>
      Tag2
    </Tag>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The close icon can be customized using <code>closeIcon</code>.</p></>) } });
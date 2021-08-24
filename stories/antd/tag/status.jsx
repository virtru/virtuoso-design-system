import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tag, Divider } from 'antd';
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';

storiesOf('tag', module).add('status', () => 
  <>
    <Divider orientation="left">Without icon</Divider>
    <div>
      <Tag color="success">success</Tag>
      <Tag color="processing">processing</Tag>
      <Tag color="error">error</Tag>
      <Tag color="warning">warning</Tag>
      <Tag color="default">default</Tag>
    </div>
    <Divider orientation="left">With icon</Divider>
    <div>
      <Tag icon={<CheckCircleOutlined />} color="success">
        success
      </Tag>
      <Tag icon={<SyncOutlined spin />} color="processing">
        processing
      </Tag>
      <Tag icon={<CloseCircleOutlined />} color="error">
        error
      </Tag>
      <Tag icon={<ExclamationCircleOutlined />} color="warning">
        warning
      </Tag>
      <Tag icon={<ClockCircleOutlined />} color="default">
        waiting
      </Tag>
      <Tag icon={<MinusCircleOutlined />} color="default">
        stop
      </Tag>
    </div>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>We preset five different colors, you can set color property such as <code>success</code>,<code>processing</code>,<code>error</code>,<code>default</code> and <code>warning</code> to indicate specific status.</p></>) } });
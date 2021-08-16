import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Upload, Button, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

storiesOf('upload', module).add('max-count', () => 
  <Space direction="vertical" style={{ width: '100%' }} size="large">
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={1}
    >
      <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
    </Upload>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={3}
      multiple
    >
      <Button icon={<UploadOutlined />}>Upload (Max: 3)</Button>
    </Upload>
  </Space>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Limit files with <code>maxCount</code>. Will replace current one when <code>maxCount</code> is <code>1</code>.</p></>) } });
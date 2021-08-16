import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

storiesOf('upload', module).add('directory', () => 
  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
    <Button icon={<UploadOutlined />}>Upload Directory</Button>
  </Upload>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can select and upload a whole directory.</p></>) } });
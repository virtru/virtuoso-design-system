import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: percent => `${parseFloat(percent.toFixed(2))}%`,
  },
};

storiesOf('antd/upload', module).add('customize-progress-bar', () => 
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Use <code>progress</code> for customize progress bar.</p></>) } });
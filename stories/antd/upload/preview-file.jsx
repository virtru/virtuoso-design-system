import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then(res => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

storiesOf('upload', module).add('preview-file', () => 
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Customize local preview. Can handle with non-image format files such as video.</p></>) } });
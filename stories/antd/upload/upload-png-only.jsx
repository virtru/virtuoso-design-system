import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Uploader = () => {
  const props = {
    beforeUpload: file => {
      if (file.type !== 'image/png') {
        message.error(`${file.name} is not a png file`);
      }
      return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
    },
    onChange: info => {
      console.log(info.fileList);
    },
  };
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload png only</Button>
    </Upload>
  );
};

storiesOf('Components/Ant Design/Upload', module).add('upload-png-only', () => <Uploader />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/upload/" target="_blank">
                  documentation on Upload component
                </a>.
              </>
            ) }
        });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Image, Space } from 'antd';
import { ZoomInOutlined } from '@ant-design/icons';

function ImageDemo() {
  return (
    <Image
      width={96}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      preview={{
        maskClassName: 'customize-mask',
        mask: (
          <Space direction="vertical" align="center">
            <ZoomInOutlined />
            示例
          </Space>
        ),
      }}
    />
  );
}

storiesOf('antd/image', module).add('preview-mask', () => <ImageDemo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Custom preview mask.</p></>) } });
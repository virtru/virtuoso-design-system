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

storiesOf('Components/Ant Design/Image', module).add('preview-mask', () => <ImageDemo />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/image/" target="_blank">
                  documentation on Image component
                </a>.
              </>
            ) }
        });
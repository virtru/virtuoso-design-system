import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Image, Button, Space } from 'antd';

function ImageDemo() {
  const [random, setRandom] = React.useState();
  return (
    <Space size={12}>
      <Image
        width={200}
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
        }
      />
      <Button
        type="primary"
        onClick={() => {
          setRandom(Date.now());
        }}
      >
        Reload
      </Button>
    </Space>
  );
}

storiesOf('Components/Ant Design/Image', module).add('placeholder', () => <ImageDemo />, {
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
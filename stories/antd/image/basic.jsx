import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Image } from 'antd';

function ImageDemo() {
  return (
    <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  );
}

storiesOf('antd/image', module).add('basic', () => <ImageDemo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Click the image to zoom in.</p></>) } });
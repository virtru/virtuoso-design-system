import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Image } from 'antd';

function ImageDemo() {
  return (
    <Image.PreviewGroup>
      <Image
        width={200}
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Image
        width={200}
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
      />
    </Image.PreviewGroup>
  );
}

storiesOf('antd/image', module).add('previewGroup', () => <ImageDemo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Click the left and right switch buttons to preview multiple images.</p></>) } });
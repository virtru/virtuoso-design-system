import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Empty, Button } from 'antd';

storiesOf('antd/empty', module).add('customize', () => 
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Customize image source, image size, description and extra content.</p></>) } });
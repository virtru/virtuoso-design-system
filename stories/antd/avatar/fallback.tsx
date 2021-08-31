import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Avatar } from 'antd';

storiesOf('antd/avatar', module).add('fallback', () => 
  <>
    <Avatar shape="circle" src="http://abc.com/not-exist.jpg">
      A
    </Avatar>
    <Avatar shape="circle" src="http://abc.com/not-exist.jpg">
      ABC
    </Avatar>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>图片不存在时，会回退到 <code>src</code>。</p></>) } });
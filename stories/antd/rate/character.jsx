import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Rate } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

storiesOf('antd/rate', module).add('character', () => 
  <>
    <Rate character={<HeartOutlined />} allowHalf />
    <br />
    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <br />
    <Rate character="好" allowHalf />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

storiesOf('icon', module).add('basic', () => 
  <div className="icons-list">
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Import icons from <code>@ant-design/icons</code>, component name of icons with different theme is the icon name suffixed by the theme name. Specify the <code>spin</code> property to show spinning animation.</p></>) } });
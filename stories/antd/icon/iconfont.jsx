import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

storiesOf('antd/Icon', module).add('iconfont', () => 
  <div className="icons-list">
    <IconFont type="icon-tuichu" />
    <IconFont type="icon-facebook" />
    <IconFont type="icon-twitter" />
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>If you are using <a href="http://iconfont.cn/">iconfont.cn</a>, you can use the icons in your project gracefully.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

storiesOf('antd/Icon', module).add('scriptUrl', () => 
  <div className="icons-list">
    <IconFont type="icon-javascript" />
    <IconFont type="icon-java" />
    <IconFont type="icon-shoppingcart" />
    <IconFont type="icon-python" />
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can use <code>scriptUrl</code> as an array after <code>@ant-design/icons@4.1.0</code>, manage icons in one <code>&lt;Icon /&gt;</code> from multiple <a href="http://iconfont.cn/">iconfont.cn</a> resources. If icon with a duplicate name in resources, it will overrided in array order.</p></>) } });
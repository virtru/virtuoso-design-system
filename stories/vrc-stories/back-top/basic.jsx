import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { BackTop } from 'antd';

storiesOf('back-top', module).add('basic', () => 
  <>
    <BackTop />
    Scroll down to see the bottom-right
    <strong className="site-back-top-basic"> gray </strong>
    button.
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The most basic usage.</p></>) } });
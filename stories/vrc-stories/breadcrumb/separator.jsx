import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Breadcrumb } from 'antd';

storiesOf('breadcrumb', module).add('separator', () => 
  <Breadcrumb separator=">">
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
    <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The separator can be customized by setting the separator property: <code>separator="&gt;"</code>.</p></>) } });
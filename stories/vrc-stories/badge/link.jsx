import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from 'antd';

storiesOf('badge', module).add('link', () => 
  <a href="#">
    <Badge count={5}>
      <span className="head-example" />
    </Badge>
  </a>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The badge can be wrapped with <code>a</code> tag to make it linkable.</p></>) } });
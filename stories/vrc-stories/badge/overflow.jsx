import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from 'antd';

storiesOf('badge', module).add('overflow', () => 
  <div>
    <Badge count={99}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={100}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={99} overflowCount={10}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={1000} overflowCount={999}>
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>mountNode,
#123;overflowCount&#125;+</code> is displayed when count is larger than <code>overflowCount</code>. The default value of <code>overflowCount</code> is <code>99</code>.</p></>) } });
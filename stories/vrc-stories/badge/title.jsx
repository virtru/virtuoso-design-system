import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from 'antd';

storiesOf('badge', module).add('title', () => 
  <div>
    <Badge count={5} title="Custom hover text">
      <a href="#" className="head-example" />
    </Badge>
    <Badge count={-5} title="Negative">
      <a href="#" className="head-example" />
    </Badge>
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The badge will display <code>title</code> when hovered over, instead of <code>count</code>.</p></>) } });
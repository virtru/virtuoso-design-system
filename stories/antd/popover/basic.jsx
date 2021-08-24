import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Popover, Button } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

storiesOf('popover', module).add('basic', () => 
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The most basic example. The size of the floating layer depends on the contents region.</p></>) } });
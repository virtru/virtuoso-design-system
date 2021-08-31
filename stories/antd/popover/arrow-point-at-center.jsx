import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Popover, Button } from 'antd';

const content = (
  <>
    <p>Content</p>
    <p>Content</p>
  </>
);

storiesOf('antd/popover', module).add('arrow-point-at-center', () => 
  <>
    <Popover placement="topLeft" title="Title" content={content}>
      <Button>Align edge / 边缘对齐</Button>
    </Popover>
    <Popover placement="topLeft" title="Title" content={content} arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Popover>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The arrow points to the center of the target element, which set <code>arrowPointAtCenter</code>.</p></>) } });
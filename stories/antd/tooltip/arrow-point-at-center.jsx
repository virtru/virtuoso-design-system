import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tooltip, Button } from 'antd';

storiesOf('antd/tooltip', module).add('arrow-point-at-center', () => 
  <>
    <Tooltip placement="topLeft" title="Prompt Text">
      <Button>Align edge / 边缘对齐</Button>
    </Tooltip>
    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Tooltip>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>By specifying <code>arrowPointAtCenter</code> prop, the arrow will point to the center of the target element.</p></>) } });
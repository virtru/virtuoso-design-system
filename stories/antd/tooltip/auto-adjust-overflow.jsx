import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tooltip, Button } from 'antd';

const wrapStyles = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
};

storiesOf('antd/tooltip', module).add('auto-adjust-overflow', () => 
  <div style={wrapStyles}>
    <Tooltip
      placement="left"
      title="Prompt Text"
      getPopupContainer={trigger => trigger.parentElement}
    >
      <Button>Adjust automatically / 自动调整</Button>
    </Tooltip>
    <br />
    <Tooltip
      placement="left"
      title="Prompt Text"
      getPopupContainer={trigger => trigger.parentElement}
      autoAdjustOverflow={false}
    >
      <Button>Ignore / 不处理</Button>
    </Tooltip>
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Adjust placement automatically when tooltip is invisible.</p></>) } });
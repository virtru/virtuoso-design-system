import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tooltip } from 'antd';

storiesOf('antd/tooltip', module).add('destroy-tooltip-on-hide', () => 
  <Tooltip destroyTooltipOnHide={{ keepParent: false }} title="prompt text">
    <span>Tooltip will destroy when hidden.</span>
  </Tooltip>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Setting <code>destroyTooltipOnHide</code> to control whether destroy dom node of tooltip when hidden.</p></>) } });
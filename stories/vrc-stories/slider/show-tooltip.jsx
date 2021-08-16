import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Slider } from 'antd';

storiesOf('slider', module).add('show-tooltip', () => <Slider defaultValue={30} tooltipVisible />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>When <code>tooltipVisible</code> is <code>true</code>, ToolTip will show always, or ToolTip will not show anyway, even if dragging or hovering.</p></>) } });
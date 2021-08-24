import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tooltip, Progress } from 'antd';

storiesOf('antd/progress', module).add('segment', () => 
  <>
    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress percent={60} success={{ percent: 30 }} />
    </Tooltip>

    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress percent={60} success={{ percent: 30 }} type="circle" />
    </Tooltip>

    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress percent={60} success={{ percent: 30 }} type="dashboard" />
    </Tooltip>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A standard progress bar. Doesn't support trail color when <code>type="circle|dashboard"</code>.</p></>) } });
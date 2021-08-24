import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Progress } from 'antd';

storiesOf('progress', module).add('format', () => 
  <>
    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>You can set a custom text by setting the <code>format</code> prop.</p></>) } });
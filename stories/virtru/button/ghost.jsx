import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from '../../../lib/index';

storiesOf('virtru/button', module).add('ghost', () => 
  <div className="site-button-ghost-wrapper">
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
  </div>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>ghost</code> property will make button's background transparent, it is commonly used in colored background.</p></>) } });
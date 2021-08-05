import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from 'antd';

storiesOf('badge', module).add('offset', () => 
  <>
    <Badge count={5} offset={[10, 10]}>
      <a href="#" className="head-example" />
    </Badge>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Set offset of the badge dot, the format is <code>[left, top]</code>, which represents the offset of the status dot from the left and top of the default position.</p></>) } });
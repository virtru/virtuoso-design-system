import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from 'antd';

storiesOf('antd/badge', module).add('size', () => 
  <>
    <Badge size="default" count={5}>
      <a href="#" className="head-example" />
    </Badge>
    <Badge size="small" count={5}>
      <a href="#" className="head-example" />
    </Badge>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Set size of numeral Badge.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Affix, Button } from 'antd';

storiesOf('antd/affix', module).add('on-change', () => 
  <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Callback with affixed state.</p></>) } });
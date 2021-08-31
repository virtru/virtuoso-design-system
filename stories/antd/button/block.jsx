import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from 'antd';

storiesOf('antd/button', module).add('block', () => 
  <>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>block</code> property will make the button fit to its parent width.</p></>) } });
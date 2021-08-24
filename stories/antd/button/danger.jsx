import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from 'antd';

storiesOf('antd/button', module).add('danger', () => 
  <>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p><code>danger</code> is a property of button after antd 4.0.</p></>) } });
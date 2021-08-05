import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Result, Button } from 'antd';

storiesOf('result', module).add('info', () => 
  <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Show processing results.</p></>) } });
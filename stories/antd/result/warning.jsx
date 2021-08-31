import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Result, Button } from 'antd';

storiesOf('antd/result', module).add('warning', () => 
  <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The result of the warning.</p></>) } });
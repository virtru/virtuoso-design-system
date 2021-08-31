import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Result, Button } from 'antd';

storiesOf('antd/result', module).add('403', () => 
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>you are not authorized to access this page.</p></>) } });
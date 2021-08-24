import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Result, Button } from 'antd';

storiesOf('result', module).add('500', () => 
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Something went wrong on server.</p></>) } });
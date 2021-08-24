import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Result, Button } from 'antd';

storiesOf('antd/result', module).add('404', () => 
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>The page you visited does not exist.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

storiesOf('result', module).add('customIcon', () => 
  <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Custom icon.</p></>) } });
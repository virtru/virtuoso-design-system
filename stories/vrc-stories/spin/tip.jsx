import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spin, Alert } from 'antd';

storiesOf('spin', module).add('tip', () => 
  <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Customized description content.</p></>) } });
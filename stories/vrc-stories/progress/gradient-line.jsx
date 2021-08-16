import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Progress } from 'antd';

const Demo = () => (
  <>
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={99.9}
    />
    <Progress
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
      percent={99.9}
      status="active"
    />
    <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={90}
    />
    <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={100}
    />
  </>
);

storiesOf('progress', module).add('gradient-line', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A package of <code>linear-gradient</code>. It is recommended to only pass two colors.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Alert } from 'antd';
import TextLoop from 'react-text-loop';

storiesOf('alert', module).add('loop-banner', () => 
  <Alert
    banner
    message={
      <TextLoop mask>
        <div>Notice message one</div>
        <div>Notice message two</div>
        <div>Notice message three</div>
        <div>Notice message four</div>
      </TextLoop>
    }
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Show a loop banner by using with <a href="https://npmjs.com/package/react-text-loop">react-text-loop</a>.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Alert } from 'antd';

storiesOf('alert', module).add('style', () => 
  <>
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>There are 4 types of Alert: <code>success</code>, <code>info</code>, <code>warning</code>, <code>error</code>.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

storiesOf('typography', module).add('title', () => 
  <>
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
    <Title level={5}>h5. Ant Design</Title>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Display title in different level.</p></>) } });
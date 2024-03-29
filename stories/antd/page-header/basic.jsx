import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { PageHeader } from 'antd';

storiesOf('antd/page-header', module).add('basic', () => 
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Standard header, suitable for use in scenarios that require a brief description.</p></>) } });
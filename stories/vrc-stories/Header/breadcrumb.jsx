import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { PageHeader } from 'antd';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

storiesOf('Header', module).add('breadcrumb', () => 
  <PageHeader
    className="site-page-header"
    title="Title"
    breadcrumb={{ routes }}
    subTitle="This is a subtitle"
  />,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>With breadcrumbs, it is suitable for deeper pages, allowing users to navigate quickly.</p></>) } });
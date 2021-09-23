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

storiesOf('Components/Ant Design/Page Header', module).add('breadcrumb', () => 
  <PageHeader
    className="site-page-header"
    title="Title"
    breadcrumb={{ routes }}
    subTitle="This is a subtitle"
  />,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/page-header/" target="_blank">
                  documentation on Page Header component
                </a>.
              </>
            ) }
        });
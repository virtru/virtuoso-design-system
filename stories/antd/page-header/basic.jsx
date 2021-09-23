import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { PageHeader } from 'antd';

storiesOf('Components/Ant Design/Page Header', module).add('basic', () => 
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
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
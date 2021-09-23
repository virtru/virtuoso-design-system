import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

storiesOf('Components/Ant Design/Breadcrumb', module).add('withIcon', () => 
  <Breadcrumb>
    <Breadcrumb.Item href="">
      <HomeOutlined />
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
      <UserOutlined />
      <span>Application List</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Application</Breadcrumb.Item>
  </Breadcrumb>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/breadcrumb/" target="_blank">
                  documentation on Breadcrumb component
                </a>.
              </>
            ) }
        });
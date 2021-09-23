import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spin, Space } from 'antd';

storiesOf('Components/Ant Design/Spin', module).add('size', () => 
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/spin/" target="_blank">
                  documentation on Spin component
                </a>.
              </>
            ) }
        });
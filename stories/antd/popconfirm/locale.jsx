import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Popconfirm } from 'antd';

storiesOf('Components/Ant Design/Popconfirm', module).add('locale', () => 
  <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
    <a href="#">Delete</a>
  </Popconfirm>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/popconfirm/" target="_blank">
                  documentation on Popconfirm component
                </a>.
              </>
            ) }
        });
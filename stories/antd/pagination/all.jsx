import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from 'antd';

storiesOf('Components/Ant Design/Pagination', module).add('all', () => 
  <>
    <Pagination
      total={85}
      showSizeChanger
      showQuickJumper
      showTotal={total => `Total ${total} items`}
    />
  </>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/pagination/" target="_blank">
                  documentation on Pagination component
                </a>.
              </>
            ) }
        });
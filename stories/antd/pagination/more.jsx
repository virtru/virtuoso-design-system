import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from 'antd';

storiesOf('Components/Ant Design/Pagination', module).add('more', () => <Pagination defaultCurrent={6} total={500} />, {
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
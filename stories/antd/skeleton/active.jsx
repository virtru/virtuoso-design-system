import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Skeleton } from 'antd';

storiesOf('Components/Ant Design/Skeleton', module).add('active', () => <Skeleton active />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/skeleton/" target="_blank">
                  documentation on Skeleton component
                </a>.
              </>
            ) }
        });
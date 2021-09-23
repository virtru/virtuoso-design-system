import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Rate } from 'antd';

storiesOf('Components/Ant Design/Rate', module).add('disabled', () => <Rate disabled defaultValue={2} />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/rate/" target="_blank">
                  documentation on Rate component
                </a>.
              </>
            ) }
        });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Rate } from 'antd';

storiesOf('Components/Ant Design/Rate', module).add('half', () => <Rate allowHalf defaultValue={2.5} />, {
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
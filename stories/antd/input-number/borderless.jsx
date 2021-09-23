import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { InputNumber } from 'antd';

storiesOf('Components/Ant Design/Input Number', module).add('borderless', () => <InputNumber min={1} max={10} defaultValue={3} bordered={false} />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/input-number/" target="_blank">
                  documentation on Input Number component
                </a>.
              </>
            ) }
        });
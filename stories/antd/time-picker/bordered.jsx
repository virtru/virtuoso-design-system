import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TimePicker } from 'antd';

const { RangePicker } = TimePicker;

storiesOf('Components/Ant Design/Time Picker', module).add('bordered', () => 
  <>
    <TimePicker bordered={false} />
    <RangePicker bordered={false} />
  </>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/time-picker/" target="_blank">
                  documentation on Time Picker component
                </a>.
              </>
            ) }
        });
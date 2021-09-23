import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

storiesOf('Components/Ant Design/Date Picker', module).add('range-picker', () => 
  <Space direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="year" />
  </Space>,
  {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/date-picker/" target="_blank">
                  documentation on Date Picker component
                </a>.
              </>
            ) }
        });
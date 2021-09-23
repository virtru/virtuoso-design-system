import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TimePicker } from 'antd';

function onChange(time, timeString) {
  console.log(time, timeString);
}

storiesOf('Components/Ant Design/Time Picker', module).add('12hours', () => 
  <>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} style={{ width: 140 }} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
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
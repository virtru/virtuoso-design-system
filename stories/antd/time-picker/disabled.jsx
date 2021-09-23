import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

storiesOf('Components/Ant Design/Time Picker', module).add('disabled', () => <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />, {
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
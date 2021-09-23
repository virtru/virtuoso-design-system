import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { TimePicker } from 'antd';

const Demo = () => {
  const [value, setValue] = useState(null);

  const onChange = time => {
    setValue(time);
  };

  return <TimePicker value={value} onChange={onChange} />;
};

storiesOf('Components/Ant Design/Time Picker', module).add('value', () => <Demo />, {
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
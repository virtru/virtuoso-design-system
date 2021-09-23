import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { DatePicker, TimePicker, Select, Space } from 'antd';

const { Option } = Select;

function PickerWithType({ type, onChange }) {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
}

function SwitchablePicker() {
  const [type, setType] = useState('time');
  return (
    <Space>
      <Select value={type} onChange={setType}>
        <Option value="time">Time</Option>
        <Option value="date">Date</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
        <Option value="quarter">Quarter</Option>
        <Option value="year">Year</Option>
      </Select>
      <PickerWithType type={type} onChange={value => console.log(value)} />
    </Space>
  );
}

storiesOf('Components/Ant Design/Date Picker', module).add('switchable', () => <SwitchablePicker />, {
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
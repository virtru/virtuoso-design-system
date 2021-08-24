import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const App = () => {
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();
  const disabledDate = current => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
    return tooEarly || tooLate;
  };

  const onOpenChange = open => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };

  return (
    <RangePicker
      value={hackValue || value}
      disabledDate={disabledDate}
      onCalendarChange={val => setDates(val)}
      onChange={val => setValue(val)}
      onOpenChange={onOpenChange}
    />
  );
};

storiesOf('date-picker', module).add('select-in-range', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A example shows how to select a dynamic range by using <code>onCalendarChange</code> and <code>disabledDate</code>.</p></>) } });
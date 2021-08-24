import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { DatePicker, Space } from 'antd';

class DateRange extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <Space>
        <DatePicker
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
        />
        <DatePicker
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
      </Space>
    );
  }
}

storiesOf('date-picker', module).add('start-end', () => <DateRange />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>When <code>RangePicker</code> does not satisfied your requirements, try to implement similar functionality with two <code>DatePicker</code>.</p>
<blockquote>
  <ul>
  <li>Use the <code>disabledDate</code> property to limit the start and end dates.</li>
  <li>Improve user experience with <code>open</code> and <code>onOpenChange</code>.</li>
  </ul>
</blockquote></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';

class App extends React.Component {
  state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  };

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = value => {
    this.setState({ value });
  };

  render() {
    const { value, selectedValue } = this.state;
    return (
      <>
        <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
      </>
    );
  }
}

storiesOf('antd/calendar', module).add('select', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A basic calendar component with Year/Month switch.</p></>) } });
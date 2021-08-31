import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { TimePicker, Button } from 'antd';

class TimePickerAddonDemo extends React.Component {
  state = { open: false };

  handleOpenChange = open => {
    this.setState({ open });
  };

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <TimePicker
        open={this.state.open}
        onOpenChange={this.handleOpenChange}
        renderExtraFooter={() => (
          <Button size="small" type="primary" onClick={this.handleClose}>
            Ok
          </Button>
        )}
      />
    );
  }
}

storiesOf('antd/time-picker', module).add('addon', () => <TimePickerAddonDemo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Render addon contents to time picker panel's bottom.</p></>) } });
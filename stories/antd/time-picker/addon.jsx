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

storiesOf('Components/Ant Design/Time Picker', module).add('addon', () => <TimePickerAddonDemo />, {
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
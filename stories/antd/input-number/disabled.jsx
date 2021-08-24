import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { InputNumber, Button } from 'antd';

class App extends React.Component {
  state = {
    disabled: true,
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <>
        <InputNumber min={1} max={10} disabled={this.state.disabled} defaultValue={3} />
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.toggle} type="primary">
            Toggle disabled
          </Button>
        </div>
      </>
    );
  }
}

storiesOf('antd/input-number', module).add('disabled', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Click the button to toggle between available and disabled states.</p></>) } });
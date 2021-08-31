import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Slider, Switch } from 'antd';

class Demo extends React.Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };

  render() {
    const { disabled } = this.state;
    return (
      <>
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </>
    );
  }
}

storiesOf('antd/slider', module).add('basic', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Basic slider. When <code>range</code> is <code>true</code>, display as dual thumb mode. When <code>disable</code> is <code>true</code>, the slider will not be interactable.</p></>) } });
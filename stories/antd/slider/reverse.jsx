import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Slider, Switch } from 'antd';

class Demo extends React.Component {
  state = {
    reverse: true,
  };

  handleReverseChange = reverse => {
    this.setState({ reverse });
  };

  render() {
    const { reverse } = this.state;
    return (
      <>
        <Slider defaultValue={30} reverse={reverse} />
        <Slider range defaultValue={[20, 50]} reverse={reverse} />
        Reversed: <Switch size="small" checked={reverse} onChange={this.handleReverseChange} />
      </>
    );
  }
}

storiesOf('antd/slider', module).add('reverse', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Using <code>reverse</code> to render slider reversely.</p></>) } });
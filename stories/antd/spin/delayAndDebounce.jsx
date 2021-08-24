import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spin, Alert, Switch } from 'antd';

class Card extends React.Component {
  state = { loading: false };

  toggle = value => {
    this.setState({ loading: value });
  };

  render() {
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );
    return (
      <div>
        <Spin spinning={this.state.loading} delay={500}>
          {container}
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}

storiesOf('spin', module).add('delayAndDebounce', () => <Card />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Specifies a delay for loading state. If <code>spinning</code> ends during delay, loading status won't appear.</p></>) } });
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Spin, Switch, Alert } from 'antd';

class Card extends React.Component {
  state = { loading: false };

  toggle = value => {
    this.setState({ loading: value });
  };

  render() {
    return (
      <div>
        <Spin spinning={this.state.loading}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}

storiesOf('antd/spin', module).add('nested', () => <Card />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Embedding content into <code>Spin</code> will set it into loading state.</p></>) } });
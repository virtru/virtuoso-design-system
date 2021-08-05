import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Mentions } from 'antd';

const { Option } = Mentions;

const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};

class App extends React.Component {
  state = {
    prefix: '@',
  };

  onSearch = (_, prefix) => {
    this.setState({ prefix });
  };

  render() {
    const { prefix } = this.state;

    return (
      <Mentions
        style={{ width: '100%' }}
        placeholder="input @ to mention people, # to mention tag"
        prefix={['@', '#']}
        onSearch={this.onSearch}
      >
        {(MOCK_DATA[prefix] || []).map(value => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </Mentions>
    );
  }
}

storiesOf('mentions', module).add('prefix', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Customize Trigger Token by <code>prefix</code> props. Default to <code>@</code>, <code>Array&lt;string&gt;</code> also supported.</p></>) } });
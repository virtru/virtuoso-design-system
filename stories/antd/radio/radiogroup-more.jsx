import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Radio, Input, Space } from 'antd';

class App extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <Radio.Group onChange={this.onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
          <Radio value={4}>
            More...
            {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
          </Radio>
        </Space>
      </Radio.Group>
    );
  }
}

storiesOf('radio', module).add('radiogroup-more', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Vertical Radio.Group, with more radios.</p></>) } });
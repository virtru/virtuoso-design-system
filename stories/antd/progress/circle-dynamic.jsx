import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Progress, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

class App extends React.Component {
  state = {
    percent: 0,
  };

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  render() {
    return (
      <>
        <Progress type="circle" percent={this.state.percent} />
        <Button.Group>
          <Button onClick={this.decline} icon={<MinusOutlined />} />
          <Button onClick={this.increase} icon={<PlusOutlined />} />
        </Button.Group>
      </>
    );
  }
}

storiesOf('progress', module).add('circle-dynamic', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>A dynamic progress bar is better.</p></>) } });
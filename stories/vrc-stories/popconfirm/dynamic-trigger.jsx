import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Popconfirm, Switch, message } from 'antd';

class App extends React.Component {
  state = {
    visible: false,
    condition: true, // Whether meet the condition, if not show popconfirm.
  };

  changeCondition = value => {
    this.setState({ condition: value });
  };

  confirm = () => {
    this.setState({ visible: false });
    message.success('Next step.');
  };

  cancel = () => {
    this.setState({ visible: false });
    message.error('Click on cancel.');
  };

  handleVisibleChange = visible => {
    if (!visible) {
      this.setState({ visible });
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(this.state.condition);
    if (this.state.condition) {
      this.confirm(); // next step
    } else {
      this.setState({ visible }); // show the popconfirm
    }
  };

  render() {
    return (
      <div>
        <Popconfirm
          title="Are you sure delete this task?"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">Delete a task</a>
        </Popconfirm>
        <br />
        <br />
        Whether directly execute：
        <Switch defaultChecked onChange={this.changeCondition} />
      </div>
    );
  }
}

storiesOf('popconfirm', module).add('dynamic-trigger', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Make it pop up under some conditions.</p></>) } });
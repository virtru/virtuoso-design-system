import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Drawer, Button, Radio, Space } from 'antd';

class App extends React.Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    const { placement, visible } = this.state;
    return (
      <>
        <Space>
          <Radio.Group defaultValue={placement} onChange={this.onChange}>
            <Radio value="top">top</Radio>
            <Radio value="right">right</Radio>
            <Radio value="bottom">bottom</Radio>
            <Radio value="left">left</Radio>
          </Radio.Group>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </Space>
        <Drawer
          title="Basic Drawer"
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );
  }
}

storiesOf('Components/Ant Design/Drawer', module).add('placement', () => <App />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/drawer/" target="_blank">
                  documentation on Drawer component
                </a>.
              </>
            ) }
        });
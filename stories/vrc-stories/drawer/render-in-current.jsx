import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Drawer, Button } from 'antd';

class App extends React.Component {
  state = { visible: false };

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

  render() {
    return (
      <div className="site-drawer-render-in-current-wrapper">
        Render in this
        <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
  }
}

storiesOf('drawer', module).add('render-in-current', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Render in current dom. custom container, check getContainer.</p></>) } });